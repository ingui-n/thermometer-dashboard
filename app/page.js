import {getAllLatestTemperature} from "@/app/actions";
import TemperatureDashboard from "@/components/TemperatureDashboard";

export default async function Root() {
  const latestTemperature = await getAllLatestTemperature();

  return (
    <TemperatureDashboard temperature={latestTemperature}/>
  );
}
