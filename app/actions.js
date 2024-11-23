import {pocketBase} from "@/lib/pocketbase";

export const getLatestTemperature = async () => {
  const pb = await pocketBase();

  return await pb.collection('latest_temperature').getList(1, 100);
};
