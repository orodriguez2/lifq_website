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

    const { honeypot: _h, turnstile_token, ...data } = parsed.data;

    // Verify Turnstile token with Cloudflare
    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
          response: turnstile_token,
        }),
      }
    );
    const turnstileJson = await turnstileRes.json();
    if (!turnstileJson.success) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

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

    // Send emails — best-effort (both fire independently)
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Confirmation to applicant
      resend.emails.send({
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

      // Admin notification
      resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: "octavio.rodriguez@gmail.com",
        subject: `New beta application — ${data.first_name} ${data.last_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1E293B;">
            <h2 style="color: #0D2A47;">New beta application</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #64748B; width: 140px;">Name</td><td style="padding: 6px 0;">${data.first_name} ${data.last_name}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Email</td><td style="padding: 6px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Age range</td><td style="padding: 6px 0;">${data.age_range}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Household</td><td style="padding: 6px 0;">${data.household_type}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Policy count</td><td style="padding: 6px 0;">${data.policy_count}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748B;">Policy types</td><td style="padding: 6px 0;">${data.policy_types.join(", ")}</td></tr>
              ${data.biggest_frustration ? `<tr><td style="padding: 6px 0; color: #64748B; vertical-align: top;">Frustration</td><td style="padding: 6px 0;">${data.biggest_frustration}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;" />
            <p style="font-size: 12px; color: #94A3B8;"><a href="https://supabase.com/dashboard/project/dfnemjldftwzwjturglh/editor">View all applications in Supabase →</a></p>
          </div>
        `,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
