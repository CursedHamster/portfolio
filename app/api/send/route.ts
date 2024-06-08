import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  email: string;
  message: string;
}

export async function POST(req: Request) {
  const formData: FormData = await req?.json();
  try {
    const data = await resend.emails.send({
      from: "Portfolio Email <onboarding@resend.dev>",
      to: ["viktoriia.harniuk@gmail.com"],
      subject: "New Message sent from The Portfolio Website",
      react: EmailTemplate(formData) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
