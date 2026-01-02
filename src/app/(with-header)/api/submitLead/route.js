// pages/api/submitLead.js

export const runtime = "nodejs";  // REQUIRED for nodemailer
// export const dynamic = "force-dynamic"; // optional if caching causes issues

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Gmail SMTP Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const {
      FULL_NAME,
      EMAIL,
      PHONE_NO,
      REMARKS,
      COUNTRY,
      STATE,
      LEAD_IP,
      REQUEST_FORM,
    } = await req.json();

    // ========== 1. Send Email ==========
    await transporter.sendMail({
      from: `"New Lead" <${process.env.GMAIL_SMTP_USER}>`,
      to: process.env.GMAIL_SMTP_USER,
      subject: `New Lead Submitted From Website`,
      html: `
        <h2>New Lead Submitted</h2>
        <p><strong>Name:</strong> ${FULL_NAME}</p>
        <p><strong>Email:</strong> ${EMAIL}</p>
        <p><strong>Phone:</strong> ${PHONE_NO}</p>
        <p><strong>Country:</strong> ${COUNTRY}</p>
        <p><strong>State:</strong> ${STATE}</p>
        <p><strong>IP:</strong> ${LEAD_IP}</p>
        <p><strong>Form:</strong> ${REQUEST_FORM}</p>
        <p><strong>Remarks:</strong> ${REMARKS}</p>
      `,
    });

    // ========== 2. Success Response ==========
    return NextResponse.json({
      success: true,
      redirect: "/thank-you",
    });

  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
