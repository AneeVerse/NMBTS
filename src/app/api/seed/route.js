import { seedDefaults } from '@/lib/content';

export async function POST() {
  try {
    const result = await seedDefaults();
    return Response.json({ success: true, upsertedCount: result.upsertedCount });
  } catch (error) {
    console.error('Failed to seed content:', error);
    return Response.json({ error: 'Failed to seed' }, { status: 500 });
  }
}
