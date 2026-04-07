import { cookies } from 'next/headers';
import { deleteSession, SESSION_COOKIE } from '@/lib/auth';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (token) {
      await deleteSession(token);
      cookieStore.delete(SESSION_COOKIE);
    }
    return Response.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
