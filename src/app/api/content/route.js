import { getAllContent, updateSection } from '@/lib/content';
import { defaults } from '@/lib/defaults';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const content = await getAllContent();
    return Response.json(content);
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return Response.json(defaults);
  }
}

export async function PUT(request) {
  try {
    const { sectionId, fields } = await request.json();

    const validSections = Object.keys(defaults);
    if (!validSections.includes(sectionId)) {
      return Response.json({ error: 'Invalid section ID' }, { status: 400 });
    }

    await updateSection(sectionId, fields);
    return Response.json({ success: true });
  } catch (error) {
    console.error('Failed to update content:', error);
    return Response.json({ error: 'Failed to update' }, { status: 500 });
  }
}
