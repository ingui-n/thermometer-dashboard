import {getAllLatestTemperature} from "@/app/actions";
import TemperatureDashboard from "@/components/TemperatureDashboard";

export default async function Root() {
  const latestTemperatures = await getAllLatestTemperature();

  return (
    <TemperatureDashboard
      defaultTemperatures={latestTemperatures}
    />
  );
}
