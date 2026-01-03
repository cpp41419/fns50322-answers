import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const submitSchema = z.object({
  question: z.string().min(10, "Question must be at least 10 characters").max(500),
  category: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = submitSchema.parse(body);

    const supabase = createClient();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase.from("submitted_questions") as any).insert({
      question: validated.question,
      category: validated.category || null,
      email: validated.email || null,
      status: "pending",
    });

    if (error) {
      console.error("Error submitting question:", error);
      return NextResponse.json(
        { success: false, message: "Failed to submit question" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Question submitted successfully. We'll review and respond within 48-72 hours.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "An error occurred" },
      { status: 500 }
    );
  }
}
