import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

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

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to submit. Please try again.' }, { status: 500 });
  }
}
