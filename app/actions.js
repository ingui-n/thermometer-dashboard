import {pocketBase} from "@/lib/pocketbase";

export const getLatestTemperature = async (device) => {
  const pb = await pocketBase();

  const temperature = await pb.collection('temperature').getList(1, 1, {
    sort: '-created',
    filter: `device = "${device}"`
  });

  return temperature.items.length === 1 ? temperature.items[0] : null;
};

export const getAllDevices = async () => {
  const pb = await pocketBase();

  return await pb.collection('devices').getList(1, 100);
};

export const getAllLatestTemperature = async () => {
  const devices = await getAllDevices();

  const temperatures = [];

  for (const device of devices.items) {
    const temperature = await getLatestTemperature(device.device);

    if (!temperature)
      continue;

    temperature.name = device.name;
    temperatures.push(temperature);
  }

  return temperatures;
};
