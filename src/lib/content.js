import clientPromise from './mongodb';
import { defaults } from './defaults';

async function getDb() {
  const client = await clientPromise;
  return client.db('nmbts');
}

export async function getAllContent() {
  const db = await getDb();
  const docs = await db.collection('content').find({}).toArray();

  if (docs.length === 0) {
    return { ...defaults };
  }

  const content = { ...defaults };
  for (const doc of docs) {
    content[doc.sectionId] = doc.fields;
  }
  return content;
}

export async function updateSection(sectionId, fields) {
  const db = await getDb();
  const result = await db.collection('content').updateOne(
    { sectionId },
    { $set: { fields, updatedAt: new Date() } },
    { upsert: true }
  );
  return result;
}

export async function seedDefaults() {
  const db = await getDb();
  const ops = Object.entries(defaults).map(([sectionId, fields]) => ({
    updateOne: {
      filter: { sectionId },
      update: { $setOnInsert: { sectionId, fields, createdAt: new Date() } },
      upsert: true,
    },
  }));
  return db.collection('content').bulkWrite(ops);
}
