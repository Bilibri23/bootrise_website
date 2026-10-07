import { Resend } from "resend";
import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      name?: string;
    };

    const email = body.email?.trim().toLowerCase() ?? "";
    const name = body.name?.trim() ?? "";

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.WAITLIST_TO_EMAIL;
    const fromEmail =
      process.env.WAITLIST_FROM_EMAIL || "BootRise <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or WAITLIST_TO_EMAIL");
      return NextResponse.json(
        {
          error:
            "Waitlist is not configured yet. Please try again later.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `BootRise waitlist: ${email}`,
      text: [
        "New BootRise waitlist signup",
        "",
        `Email: ${email}`,
        name ? `Name: ${name}` : "Name: (not provided)",
        `Submitted at: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not join the waitlist. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist route error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
