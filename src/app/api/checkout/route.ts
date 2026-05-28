import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

const checkoutSchema = z.object({
  priceId: z.string().startsWith("price_"),
  email: z.string().email().optional(),
  turnstile_token: z.string().min(1),
});

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const json = await res.json();
  return json.success === true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const body = await request.json();
    const parsed = checkoutSchema.safeParse(body);
    if (!parsed.success) {
      console.warn("[checkout] validation_failed", { ip, errors: parsed.error.flatten().fieldErrors });
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const { priceId, email, turnstile_token } = parsed.data;

    const captchaOk = await verifyTurnstile(turnstile_token);
    if (!captchaOk) {
      console.warn("[checkout] captcha_failed", { ip });
      return NextResponse.json({ error: "CAPTCHA verification failed. Please try again." }, { status: 400 });
    }

    const origin = request.headers.get("origin") ?? "https://lifq.ai";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      customer_email: email,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: { source: "marketing_site" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] stripe_error", { ip, error: err instanceof Error ? err.message : String(err) });
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
