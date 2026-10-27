import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, category, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in all required fields (Name, Email, Phone, Message).' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'ruchibudhelia1@gmail.com';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // HTML Email Template for Navyug Infragen
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E5E7EB; border-radius: 8px; overflow: hidden; background-color: #FFFFFF;">
        <div style="background-color: #121417; color: #FFFFFF; padding: 24px; border-bottom: 4px solid #E2811C;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">NAVYUG &bull; NEW CONTACT INQUIRY</h2>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #9CA3AF;">Received on ${timestamp} (IST)</p>
        </div>
        
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
            <tr>
              <td style="padding: 8px 0; color: #6B7280; width: 140px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-weight: bold;">Company / Org:</td>
              <td style="padding: 8px 0; color: #111827;">${company || 'Not Specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #E2811C; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #111827; text-decoration: none; font-weight: 600;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280; font-weight: bold;">Requirement:</td>
              <td style="padding: 8px 0; color: #E2811C; font-weight: bold;">${category || 'General Procurement'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background-color: #F9FAFB; border-left: 3px solid #E2811C; border-radius: 4px;">
            <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; color: #6B7280; margin-bottom: 6px;">
              Project Scope / Message:
            </div>
            <div style="font-size: 14px; color: #1F2937; white-space: pre-wrap; line-height: 1.5;">${message}</div>
          </div>
        </div>

        <div style="background-color: #F3F4F6; padding: 14px 24px; font-size: 12px; color: #6B7280; border-top: 1px solid #E5E7EB;">
          Sent automatically from <strong>Navyug Website</strong> to <strong>${recipientEmail}</strong>.
        </div>
      </div>
    `;

    // 1. Check for SMTP credentials
    const smtpHost = process.env.SMTP_HOST || (process.env.GMAIL_USER ? 'smtp.gmail.com' : 'smtp.gmail.com');
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const isSecure = process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465';
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(process.env.SMTP_PORT || (isSecure ? '465' : '587'), 10),
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Navyug Contact" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `[Navyug] New Inquiry from ${name} (${company || 'Website'}) - ${category || 'General'}`,
          html: htmlContent,
          text: `Website: Navyug\nName: ${name}\nCompany: ${company || 'Individual'}\nPhone: ${phone}\nEmail: ${email}\nRequirement: ${category}\nDetails:\n${message}`,
        });

        return NextResponse.json({
          success: true,
          message: `Thank you, ${name}! Your message has been sent successfully to ${recipientEmail}. We will get back to you shortly.`,
          dispatchedTo: recipientEmail,
        });
      } catch (smtpErr) {
        console.error('SMTP Error:', smtpErr);
        return NextResponse.json(
          {
            success: false,
            error: `Failed to send email via SMTP: ${smtpErr.message}. Please check your SMTP settings in .env.local.`,
          },
          { status: 500 }
        );
      }
    }

    // If SMTP credentials are not yet configured in .env.local
    console.log('--- INCOMING NAVYUG CONTACT INQUIRY ---');
    console.log({ name, company, email, phone, category, message, recipientEmail, timestamp });
    console.log('---------------------------------------');

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your inquiry has been received for ${recipientEmail}.`,
      dispatchedTo: recipientEmail,
      note: 'SMTP credentials not configured in .env.local; logged to server console.',
    });
  } catch (error) {
    console.error('Contact API Unexpected Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
