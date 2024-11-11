import {pocketBase} from "@/lib/pocketbase";

export const subscribeToTemperature = async (callback) => {
  const pb = await pocketBase();

  // return pb.realtime.subscribe('temperature', callback);
  return pb.collection('temperature').subscribe('*', (e) => {
    console.log(e.action);
    console.log(e.record);
  }, { /* other options like expand, custom headers, etc. */ });
};

export const getLatestTemperature = async (device) => {
  const pb = await pocketBase();

  const temperature = await pb.collection('temperature').getList(1, 1, {
    sort: '-created',
    filter: `device = "${device}"`,
  });

  return temperature[0];
};

export const getAllLatestTemperature = async () => {
  //todo get active devices from db
  //todo for all devices run getLatestTemperature
};
