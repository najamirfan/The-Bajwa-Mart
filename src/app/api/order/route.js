import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { 
      customerEmail, customerName, customerPhone, customerAddress, 
      customerNotes, orderId, items, total, paymentMethod 
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Elegant Product Rows
    const itemsHtml = items.map(item => `
      <tr>
        <td style="padding: 15px 0; border-bottom: 1px solid rgba(197, 160, 89, 0.2); color: #ffffff;">
          <span style="display: block; font-weight: bold; font-size: 14px;">${item.name}</span>
          <span style="font-size: 12px; color: #c5a059;">Qty: ${item.quantity}</span>
        </td>
        <td style="padding: 15px 0; border-bottom: 1px solid rgba(197, 160, 89, 0.2); text-align: right; color: #c5a059; font-weight: bold;">
          $${item.price * item.quantity}
        </td>
      </tr>
    `).join('');

    // --- 1. ADMIN EMAIL (Professional & Action-Oriented) ---
    const adminHtml = `
      <div style="background-color: #0a0a0a; color: #ffffff; font-family: 'Helvetica', sans-serif; padding: 40px; max-width: 600px; margin: auto;">
        <div style="border: 1px solid #c5a059; padding: 30px;">
          <h2 style="color: #c5a059; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; border-bottom: 1px solid #c5a059; pb: 10px;">New Store Order</h2>
          
          <div style="margin-bottom: 30px;">
            <p style="margin: 5px 0;"><strong style="color: #c5a059;">ORDER ID:</strong> ${orderId}</p>
            <p style="margin: 5px 0;"><strong style="color: #c5a059;">PAYMENT:</strong> ${paymentMethod?.toUpperCase()}</p>
          </div>

          <h4 style="color: #c5a059; text-transform: uppercase; font-size: 12px; margin-bottom: 10px;">Customer Logistics</h4>
          <div style="background: #1a1a1a; padding: 15px; border-radius: 4px; margin-bottom: 30px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${customerName}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${customerPhone}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${customerEmail}</p>
            <p style="margin: 5px 0;"><strong>Address:</strong> ${customerAddress}</p>
            <p style="margin: 10px 0 0 0; font-style: italic; color: #888;">Note: ${customerNotes || 'None'}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            ${itemsHtml}
          </table>

          <div style="text-align: right; margin-top: 20px;">
            <p style="color: #888; margin-bottom: 5px;">Total Revenue</p>
            <h2 style="color: #c5a059; margin: 0; font-size: 32px;">$${total}</h2>
          </div>
        </div>
      </div>
    `;

    // --- 2. CUSTOMER EMAIL (Luxury Brand Experience) ---
    const customerHtml = `
      <div style="background-color: #ffffff; color: #1a1a1a; font-family: 'Georgia', serif; padding: 40px; max-width: 600px; margin: auto; border: 1px solid #eee;">
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #c5a059; font-size: 28px; letter-spacing: 5px; text-transform: uppercase; margin: 0;">BAJWA MART</h1>
          <p style="font-size: 10px; letter-spacing: 2px; color: #888; text-transform: uppercase; margin-top: 5px;">Global Purveyors of Excellence</p>
        </div>

        <h2 style="font-weight: normal; font-size: 22px; text-align: center; margin-bottom: 30px;">Your order is confirmed.</h2>
        
        <p style="font-size: 14px; line-height: 1.6; color: #444;">
          Dear ${customerName},<br><br>
          Thank you for choosing Bajwa Mart. We have received your order <strong>#${orderId}</strong> and our team is currently preparing it for shipment to your residence in <strong>${customerAddress}</strong>.
        </p>

        <div style="margin: 40px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
             ${itemsHtml.replace(/#ffffff/g, '#1a1a1a')} 
          </table>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <p style="font-size: 11px; color: #888; text-transform: uppercase; margin: 0;">Payment Method</p>
            <p style="font-size: 14px; margin: 5px 0;">${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Secure Card Payment'}</p>
          </div>
          <div style="text-align: right;">
            <p style="font-size: 11px; color: #888; text-transform: uppercase; margin: 0;">Grand Total</p>
            <p style="font-size: 24px; color: #c5a059; font-weight: bold; margin: 5px 0;">$${total}</p>
          </div>
        </div>

        <div style="margin-top: 50px; text-align: center; border-top: 1px solid #eee; pt: 20px;">
          <p style="font-size: 12px; color: #999;">If you have any questions, reply to this email or contact us via WhatsApp.</p>
          <p style="font-size: 10px; color: #c5a059; letter-spacing: 1px; margin-top: 20px;">BAJWA MART GLOBAL | EST. 2026</p>
        </div>
      </div>
    `;

    // 1. Send Admin Email
    await transporter.sendMail({
      from: `"Bajwa Mart Orders" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚨 New Order ${orderId} | $${total}`,
      html: adminHtml,
    });

    // 2. Send Customer Email
    await transporter.sendMail({
      from: `"Bajwa Mart" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Your Order Confirmation - #${orderId}`,
      html: customerHtml,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}