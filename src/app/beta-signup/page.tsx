"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { analytics } from "@/lib/analytics";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { betaSignupSchema, type BetaSignupInput } from "@/lib/validations/beta-signup";
import {
  AGE_RANGE_OPTIONS,
  HOUSEHOLD_TYPE_OPTIONS,
  POLICY_COUNT_OPTIONS,
  POLICY_TYPE_OPTIONS,
} from "@/lib/constants/beta-signup-labels";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ButtonLink } from "@/components/ui/button-link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function BetaSignupPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);

  useEffect(() => {
    analytics.signupStarted();
  }, []);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BetaSignupInput>({
    resolver: zodResolver(betaSignupSchema),
    defaultValues: { policy_types: [], turnstile_token: "" },
  });

  async function onSubmit(data: BetaSignupInput) {
    setServerError(null);
    const res = await fetch("/api/beta-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.status === 409) {
      setAlreadySignedUp(true);
      return;
    }
    if (!res.ok) {
      setServerError(json.error ?? "Something went wrong. Please try again.");
      return;
    }
    analytics.signupCompleted();
    router.push("/beta-signup/thank-you");
  }

  return (
    <section className="py-16 bg-surface-alt min-h-screen">
      <Container>
        <div className="max-w-lg mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-medium mb-3" style={{ color: "#0D2A47" }}>
              Request your invite
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              LifQ helps households understand and maximize the insurance and benefits they already
              have. This is a private beta with limited capacity; applications are reviewed to ensure
              quality, so acceptance is not guaranteed for everyone.
            </p>
          </div>

          {alreadySignedUp && (
            <div className="mb-6 flex flex-col items-center gap-3 rounded-xl border border-brand-teal/30 bg-[#E0F7F5] p-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-brand-teal" />
              <div>
                <p className="font-heading font-medium text-lg mb-1" style={{ color: "#0D2A47" }}>
                  You&rsquo;re already on the list!
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We already have your application on file. We&rsquo;ll reach out when a beta spot opens up.
                </p>
              </div>
              <ButtonLink href="/" variant="outline" size="sm" className="mt-1">
                Back to home
              </ButtonLink>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-6"
          >
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute opacity-0 w-0 h-0 pointer-events-none"
              {...register("honeypot")}
            />

            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="first_name">First name</Label>
                <Input id="first_name" {...register("first_name")} placeholder="Jane" />
                {errors.first_name && (
                  <p className="text-xs text-destructive">{errors.first_name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="last_name">Last name</Label>
                <Input id="last_name" {...register("last_name")} placeholder="Smith" />
                {errors.last_name && (
                  <p className="text-xs text-destructive">{errors.last_name.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="jane@example.com" />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Age range */}
            <div className="space-y-1.5">
              <Label htmlFor="age_range">Age range</Label>
              <Controller
                name="age_range"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="age_range">
                      <SelectValue placeholder="Select age range" />
                    </SelectTrigger>
                    <SelectContent>
                      {AGE_RANGE_OPTIONS.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.age_range && (
                <p className="text-xs text-destructive">{errors.age_range.message}</p>
              )}
            </div>

            {/* Household type */}
            <div className="space-y-1.5">
              <Label htmlFor="household_type">Household</Label>
              <Controller
                name="household_type"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="household_type">
                      <SelectValue placeholder="Select household type" />
                    </SelectTrigger>
                    <SelectContent>
                      {HOUSEHOLD_TYPE_OPTIONS.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.household_type && (
                <p className="text-xs text-destructive">{errors.household_type.message}</p>
              )}
            </div>

            {/* Policy count */}
            <div className="space-y-2">
              <Label>How many policies do you have?</Label>
              <Controller
                name="policy_count"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-wrap gap-x-6 gap-y-2"
                  >
                    {POLICY_COUNT_OPTIONS.map(({ value, label }) => (
                      <div key={value} className="flex items-center gap-2">
                        <RadioGroupItem value={value} id={`pc-${value}`} />
                        <Label htmlFor={`pc-${value}`} className="font-normal cursor-pointer">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
              />
              {errors.policy_count && (
                <p className="text-xs text-destructive">{errors.policy_count.message}</p>
              )}
            </div>

            {/* Policy types */}
            <div className="space-y-2">
              <Label>What types of policies do you have? (select all that apply)</Label>
              <Controller
                name="policy_types"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-2">
                    {POLICY_TYPE_OPTIONS.map(({ value, label }) => {
                      const checked = field.value.includes(value as never);
                      return (
                        <div key={value} className="flex items-center gap-2">
                          <Checkbox
                            id={`pt-${value}`}
                            checked={checked}
                            onCheckedChange={(c) => {
                              field.onChange(
                                c
                                  ? [...field.value, value]
                                  : field.value.filter((v) => v !== value)
                              );
                            }}
                          />
                          <Label htmlFor={`pt-${value}`} className="font-normal cursor-pointer">
                            {label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                )}
              />
              {errors.policy_types && (
                <p className="text-xs text-destructive">{errors.policy_types.message}</p>
              )}
            </div>

            {/* Biggest frustration */}
            <div className="space-y-1.5">
              <Label htmlFor="biggest_frustration">
                What&rsquo;s your biggest frustration with managing your coverage?{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Textarea
                id="biggest_frustration"
                {...register("biggest_frustration")}
                placeholder="Tell us in your own words..."
                rows={3}
                maxLength={1000}
              />
            </div>

            {/* Turnstile CAPTCHA */}
            <div>
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setValue("turnstile_token", token)}
                onError={() => setValue("turnstile_token", "")}
                onExpire={() => setValue("turnstile_token", "")}
              />
              {errors.turnstile_token && (
                <p className="text-xs text-destructive mt-1">{errors.turnstile_token.message}</p>
              )}
            </div>

            {/* Server error */}
            {serverError && (
              <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-3">
                {serverError}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-brand-blue hover:bg-[#1565C0] text-white text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Request my invite"
              )}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
