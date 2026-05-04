import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // 1. Get order details from the frontend
    const { customerEmail, customerName, orderId, items, total } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Format the list of items for the email
    const itemsHtml = items.map(item => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">$${item.price}</td>
      </tr>
    `).join('');

    // 3. Send Email to Customer
    await transporter.sendMail({
      from: `"Bajwa Mart" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Your Bajwa Mart Order #${orderId} is Confirmed`,
      html: `
        <div style="font-family: serif; max-width: 600px; margin: auto; border: 1px solid #c5a059; padding: 40px;">
          <h1 style="color: #c5a059; text-align: center; letter-spacing: 2px;">THANK YOU</h1>
          <p>Dear ${customerName},</p>
          <p>Your order has been received and is being prepared for shipment.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background: #fdfbf7; color: #c5a059;">
                <th style="padding: 10px; text-align: left;">Product</th>
                <th style="padding: 10px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          <p style="text-align: right; font-size: 18px; color: #c5a059;"><strong>Total: $${total}</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Order email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}