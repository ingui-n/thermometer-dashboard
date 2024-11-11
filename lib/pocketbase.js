'use server';

import PocketBase from 'pocketbase';

export const pocketBase = async () => {
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  await pb.collection('users').authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
  return pb;
};
