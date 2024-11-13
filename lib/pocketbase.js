import PocketBase from 'pocketbase';

export const pocketBase = async (isServerSide = true) => {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

  if (isServerSide)
    await pb.collection('users').authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);

  return pb;
};
