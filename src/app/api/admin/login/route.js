import { cookies } from 'next/headers';
import { ensureAdmin, verifyLogin, createSession, SESSION_COOKIE } from '@/lib/auth';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    await ensureAdmin();

    const valid = await verifyLogin(username, password);
    if (!valid) {
      return Response.json({ error: 'Invalid username or password' }, { status: 401 });
    }

    const token = await createSession();
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/',
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
