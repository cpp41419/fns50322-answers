"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, DollarSign, TrendingUp, Info, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalculationResult {
  year1: { upfront: number; trail: number; total: number; netIncome: number };
  year2: { upfront: number; trail: number; total: number; netIncome: number };
  year3: { upfront: number; trail: number; total: number; netIncome: number };
  year5: { upfront: number; trail: number; total: number; netIncome: number };
  trailBookValue: number;
}

export default function IncomeCalculatorPage() {
  const [formData, setFormData] = useState({
    loansPerMonth: 3,
    avgLoanSize: 600000,
    upfrontRate: 0.65,
    trailRate: 0.15,
    aggregatorSplit: 75,
    operatingCosts: 15000,
  });

  const [results, setResults] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateIncome = () => {
    const {
      loansPerMonth,
      avgLoanSize,
      upfrontRate,
      trailRate,
      aggregatorSplit,
      operatingCosts,
    } = formData;

    const splitMultiplier = aggregatorSplit / 100;
    const annualLoans = loansPerMonth * 12;
    const annualVolume = annualLoans * avgLoanSize;

    // Year 1
    const y1Upfront = annualVolume * (upfrontRate / 100) * splitMultiplier;
    const y1Trail = (annualVolume / 2) * (trailRate / 100) * splitMultiplier; // Average 6 months
    const y1Total = y1Upfront + y1Trail;
    const y1Net = y1Total - operatingCosts;

    // Year 2 - trail book grows
    const y2Upfront = annualVolume * (upfrontRate / 100) * splitMultiplier;
    const y2TrailBook = annualVolume * 1.5; // Year 1 + half of year 2
    const y2Trail = y2TrailBook * (trailRate / 100) * splitMultiplier;
    const y2Total = y2Upfront + y2Trail;
    const y2Net = y2Total - operatingCosts;

    // Year 3
    const y3Upfront = annualVolume * (upfrontRate / 100) * splitMultiplier;
    const y3TrailBook = annualVolume * 2.5;
    const y3Trail = y3TrailBook * (trailRate / 100) * splitMultiplier;
    const y3Total = y3Upfront + y3Trail;
    const y3Net = y3Total - operatingCosts;

    // Year 5
    const y5Upfront = annualVolume * (upfrontRate / 100) * splitMultiplier;
    const y5TrailBook = annualVolume * 4.5; // Assuming ~10% annual runoff
    const y5Trail = y5TrailBook * (trailRate / 100) * splitMultiplier;
    const y5Total = y5Upfront + y5Trail;
    const y5Net = y5Total - operatingCosts;

    // Trail book value (typically 2-3x annual trail)
    const trailBookValue = y5Trail * 2.5;

    setResults({
      year1: { upfront: y1Upfront, trail: y1Trail, total: y1Total, netIncome: y1Net },
      year2: { upfront: y2Upfront, trail: y2Trail, total: y2Total, netIncome: y2Net },
      year3: { upfront: y3Upfront, trail: y3Trail, total: y3Total, netIncome: y3Net },
      year5: { upfront: y5Upfront, trail: y5Trail, total: y5Total, netIncome: y5Net },
      trailBookValue,
    });
    setShowResults(true);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tools" className="hover:text-brand-600">Tools</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Income Calculator</span>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 rounded-2xl mb-4">
              <Calculator className="w-8 h-8 text-brand-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Broker Income Calculator
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Estimate your potential earnings as a mortgage broker. See how upfront
              and trail commissions build over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Your Assumptions</h2>

              <div className="space-y-6">
                {/* Loans per month */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loans Settled Per Month
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={formData.loansPerMonth}
                    onChange={(e) => setFormData({ ...formData, loansPerMonth: parseInt(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>1</span>
                    <span className="font-bold text-brand-600">{formData.loansPerMonth} loans/month</span>
                    <span>10</span>
                  </div>
                </div>

                {/* Average loan size */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Average Loan Size
                  </label>
                  <input
                    type="range"
                    min="300000"
                    max="1500000"
                    step="50000"
                    value={formData.avgLoanSize}
                    onChange={(e) => setFormData({ ...formData, avgLoanSize: parseInt(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>$300K</span>
                    <span className="font-bold text-brand-600">{formatCurrency(formData.avgLoanSize)}</span>
                    <span>$1.5M</span>
                  </div>
                </div>

                {/* Upfront commission */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Upfront Commission Rate
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="0.75"
                    step="0.05"
                    value={formData.upfrontRate}
                    onChange={(e) => setFormData({ ...formData, upfrontRate: parseFloat(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>0.50%</span>
                    <span className="font-bold text-brand-600">{formData.upfrontRate.toFixed(2)}%</span>
                    <span>0.75%</span>
                  </div>
                </div>

                {/* Trail commission */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Trail Commission Rate (Annual)
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="0.25"
                    step="0.01"
                    value={formData.trailRate}
                    onChange={(e) => setFormData({ ...formData, trailRate: parseFloat(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>0.10%</span>
                    <span className="font-bold text-brand-600">{formData.trailRate.toFixed(2)}%</span>
                    <span>0.25%</span>
                  </div>
                </div>

                {/* Aggregator split */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Commission Split
                  </label>
                  <input
                    type="range"
                    min="60"
                    max="95"
                    step="5"
                    value={formData.aggregatorSplit}
                    onChange={(e) => setFormData({ ...formData, aggregatorSplit: parseInt(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>60%</span>
                    <span className="font-bold text-brand-600">{formData.aggregatorSplit}% (you keep)</span>
                    <span>95%</span>
                  </div>
                </div>

                {/* Operating costs */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Annual Operating Costs
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="5000"
                    value={formData.operatingCosts}
                    onChange={(e) => setFormData({ ...formData, operatingCosts: parseInt(e.target.value) })}
                    className="w-full accent-brand-600"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-1">
                    <span>$5K</span>
                    <span className="font-bold text-brand-600">{formatCurrency(formData.operatingCosts)}</span>
                    <span>$50K</span>
                  </div>
                </div>

                <Button onClick={calculateIncome} className="w-full" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My Income
                </Button>
              </div>
            </div>

            {/* Results */}
            <div>
              {showResults && results ? (
                <div className="space-y-6">
                  {/* Summary Card */}
                  <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-medium opacity-90 mb-2">Year 5 Projected Income</h3>
                    <div className="text-4xl font-bold mb-4">
                      {formatCurrency(results.year5.netIncome)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <p className="text-sm opacity-75">Trail Book Value</p>
                        <p className="text-xl font-bold">{formatCurrency(results.trailBookValue)}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-75">Monthly Trail</p>
                        <p className="text-xl font-bold">{formatCurrency(results.year5.trail / 12)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Year by Year */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Income Progression</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Year 1", data: results.year1 },
                        { label: "Year 2", data: results.year2 },
                        { label: "Year 3", data: results.year3 },
                        { label: "Year 5", data: results.year5 },
                      ].map((year) => (
                        <div key={year.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                          <div>
                            <p className="font-medium text-slate-900">{year.label}</p>
                            <p className="text-sm text-slate-500">
                              Upfront: {formatCurrency(year.data.upfront)} + Trail: {formatCurrency(year.data.trail)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-slate-900">{formatCurrency(year.data.netIncome)}</p>
                            <p className="text-xs text-slate-500">net income</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium mb-1">Important Notes</p>
                        <ul className="list-disc list-inside space-y-1 text-amber-700">
                          <li>Results are estimates based on typical commission structures</li>
                          <li>Actual income varies by lender, loan type, and market conditions</li>
                          <li>First 6-12 months may have lower volume while building pipeline</li>
                          <li>Trail income assumes ~10% annual loan runoff</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-600 mb-2">
                    Ready to see your potential?
                  </h3>
                  <p className="text-slate-500">
                    Adjust the sliders and click calculate to see your projected income as a mortgage broker.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Commission Explainer */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Broker Commissions Work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Upfront Commission</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  A one-time payment when a loan settles. Typically <strong>0.5% to 0.7%</strong> of
                  the loan amount. On a $600,000 loan at 0.65%, that&apos;s approximately $3,900.
                </p>
                <p className="text-sm text-slate-500">
                  <em>Source: <a href="https://trackmytrail.com.au/mortgage-broker-commission-rates-australia/" className="text-brand-600 hover:underline" target="_blank" rel="noopener">Track My Trail</a></em>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Trail Commission</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Ongoing payments while the loan remains active. Typically <strong>0.15% to 0.275%</strong> per
                  year of the outstanding balance. This builds into a valuable &quot;trail book&quot; over time.
                </p>
                <p className="text-sm text-slate-500">
                  <em>Source: <a href="https://www.mfaa.com.au/wp-content/uploads/2025/03/Broker-Remuneration-Factsheet_060325.pdf" className="text-brand-600 hover:underline" target="_blank" rel="noopener">MFAA</a></em>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Ready to start your mortgage broking career?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/questions/getting-started">Getting Started Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/tools/rto-comparison">Compare RTOs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
