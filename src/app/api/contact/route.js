import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1. Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // 2. Setup Email Data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // UPDATED: This now uses your actual email from .env.local
      replyTo: email,           // NEW: Allows you to reply directly to the customer
      subject: `New Message from ${name} - Bajwa Mart`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; color: #0a0a0a; padding: 20px; border: 1px solid #c5a059; max-width: 600px;">
          <h2 style="color: #c5a059; border-bottom: 1px solid #c5a059; padding-bottom: 10px;">New Bajwa Mart Inquiry</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; margin-top: 10px;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
          <p style="font-size: 10px; color: #999; margin-top: 20px;">Sent via Bajwa Mart Web Portal</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}