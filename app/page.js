import {getAllLatestTemperature} from "@/app/actions";
import TemperatureDashboard from "@/components/TemperatureDashboard";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Root() {
  const latestTemperatures = await getAllLatestTemperature();

  return (
    <TemperatureDashboard
      defaultTemperatures={latestTemperatures}
    />
  );
}
