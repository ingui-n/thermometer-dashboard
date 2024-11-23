import {getLatestTemperature} from "@/app/actions";
import TemperatureDashboard from "@/components/TemperatureDashboard";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Root() {
  const latestTemperatures = await getLatestTemperature();

  return (
    <TemperatureDashboard
      defaultTemperatures={latestTemperatures}
    />
  );
}
