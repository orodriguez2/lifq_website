import { NextRequest, NextResponse } from "next/server";
import { betaSignupSchema } from "@/lib/validations/beta-signup";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot: bots fill the hidden field
    if (body.honeypot) {
      return NextResponse.json({ success: true }); // silently accept
    }

    const parsed = betaSignupSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { honeypot: _, ...data } = parsed.data;
    const supabase = createAdminClient();

    const { error } = await supabase.from("beta_signups").insert({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      age_range: data.age_range,
      household_type: data.household_type,
      policy_count: data.policy_count,
      policy_types: data.policy_types,
      biggest_frustration: data.biggest_frustration ?? null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist." },
          { status: 409 }
        );
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }

    // Send confirmation email — best-effort
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: data.email,
        subject: "You're on the LifQ waitlist!",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1E293B;">
            <h1 style="color: #0D2A47; font-size: 24px;">Hi ${data.first_name}, you're on the list!</h1>
            <p>Thanks for applying to the LifQ private beta. We review applications to ensure quality and will be in touch when a spot opens up for you.</p>
            <p>In the meantime, LifQ helps households understand and maximize the insurance and benefits they already have — organizing everything in one place with AI-powered insights.</p>
            <p style="color: #64748B; font-size: 14px;">Free during beta. Limited spots. We appreciate your patience.</p>
            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;" />
            <p style="font-size: 12px; color: #94A3B8;">LifQ · <a href="https://lifq.ai">lifq.ai</a></p>
          </div>
        `,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
