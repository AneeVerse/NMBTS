import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, phone, business, message } = await request.json();

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return Response.json({ error: 'Name, phone and message are required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    await db.collection('contacts').insertOne({
      name: name.trim(),
      phone: phone.trim(),
      business: business?.trim() || '',
      message: message.trim(),
      submittedAt: new Date(),
    });

    await transporter.sendMail({
      from: `"NMBTS Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Enquiry from ${name.trim()}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${name.trim()}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone.trim()}</td></tr>
          <tr><td><strong>Business</strong></td><td>${business?.trim() || '—'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message.trim()}</td></tr>
        </table>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
  }
}
