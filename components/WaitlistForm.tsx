"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "consent", string>>;

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Errors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    if (name.length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (form.get("consent") !== "yes") nextErrors.consent = "Please confirm that we may contact you.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("loading");
    // Integration point: send the form to Shopify, Klaviyo, Mailchimp, or a custom API.
    window.setTimeout(() => setStatus("success"), 700);
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span><Check /></span>
        <strong>You’re on the list.</strong>
        <p>We’ll save you a place at the pure table.</p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={submit} noValidate>
      <div className="form-line">
        <label>
          <span>FULL NAME</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" aria-invalid={!!errors.name} />
          {errors.name && <em>{errors.name}</em>}
        </label>
        <label>
          <span>EMAIL ADDRESS</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@email.com" aria-invalid={!!errors.email} />
          {errors.email && <em>{errors.email}</em>}
        </label>
        <label>
          <span>WHATSAPP <i>OPTIONAL</i></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
        </label>
      </div>
      <div className="form-bottom">
        <label className="consent">
          <input name="consent" value="yes" type="checkbox" />
          <span>I agree to receive thoughtful launch updates.</span>
        </label>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "SAVING YOUR PLACE…" : "RESERVE EARLY ACCESS"}
          {status !== "loading" && <ArrowUpRight />}
        </button>
      </div>
      {errors.consent && <em className="consent-error">{errors.consent}</em>}
    </form>
  );
}
