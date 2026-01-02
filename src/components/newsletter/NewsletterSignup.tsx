"use client";

import { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "card" | "minimal";
  title?: string;
  description?: string;
}

export default function NewsletterSignup({
  variant = "card",
  title = "The FNS50322 Report",
  description = "Weekly insights for aspiring mortgage brokers. Regulatory updates, career tips, and tool launches.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome! Check your email to confirm.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm"
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : status === "success" ? (
            <Check className="w-4 h-4" />
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    );
  }

  if (variant === "inline") {
    return (
      <div className="bg-brand-50 border border-brand-100 rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-48 px-4 py-2 rounded-lg border border-slate-200 text-sm"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-700 disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : status === "success" ? (
                <Check className="w-4 h-4" />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
        {message && (
          <p className={`text-sm mt-2 ${status === "error" ? "text-red-600" : "text-green-600"}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  // Default card variant
  return (
    <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-brand-100 text-sm">Weekly newsletter</p>
        </div>
      </div>
      <p className="text-brand-100 mb-6">{description}</p>

      {status === "success" ? (
        <div className="bg-white/20 rounded-lg p-4 flex items-center gap-3">
          <Check className="w-5 h-5" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-400"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-4 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe for Free"
            )}
          </button>
          {message && status === "error" && (
            <p className="text-sm text-red-200">{message}</p>
          )}
        </form>
      )}

      <p className="text-xs text-brand-200 mt-4">
        Join 500+ aspiring brokers. Unsubscribe anytime.
      </p>
    </div>
  );
}
