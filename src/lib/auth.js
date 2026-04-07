import crypto from 'crypto';
import clientPromise from './mongodb';

export const SESSION_COOKIE = 'nmbts_admin';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

async function getDb() {
  const client = await clientPromise;
  return client.db('nmbts');
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha256').toString('hex');
}

export async function ensureAdmin() {
  const db = await getDb();
  const exists = await db.collection('admin_users').findOne({});
  if (!exists) {
    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword('nmbts@2026', salt);
    await db.collection('admin_users').insertOne({
      username: 'nmbts@2026',
      passwordHash,
      salt,
      createdAt: new Date(),
    });
  }
}

export async function verifyLogin(username, password) {
  const db = await getDb();
  const user = await db.collection('admin_users').findOne({ username });
  if (!user) return false;
  const hash = hashPassword(password, user.salt);
  return hash === user.passwordHash;
}

export async function createSession() {
  const db = await getDb();
  const token = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await db.collection('admin_sessions').insertOne({ token, expiresAt, createdAt: new Date() });
  return token;
}

export async function verifySession(token) {
  if (!token) return false;
  try {
    const db = await getDb();
    const session = await db.collection('admin_sessions').findOne({
      token,
      expiresAt: { $gt: new Date() },
    });
    return !!session;
  } catch {
    return false;
  }
}

export async function deleteSession(token) {
  const db = await getDb();
  await db.collection('admin_sessions').deleteOne({ token });
}
