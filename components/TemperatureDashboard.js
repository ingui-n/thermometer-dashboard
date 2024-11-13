'use client';

import {Card, CardBody} from "@nextui-org/card";
import {useEffect, useState} from "react";
import {pocketBase} from "@/lib/pocketbase";

export default function TemperatureDashboard({defaultTemperatures}) {
  const [temperatures, setTemperature] = useState(defaultTemperatures || []);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const replaceTemperature = (newTemperature) => {
      setTemperature(temperatures.map(
        t => t.device === newTemperature.device ? {...newTemperature, name: t.name} : t
      ));
    };

    if (isLoaded)
      return;

    (async () => {
      setIsLoaded(true);

      const pb = await pocketBase(false);
      await pb.collection('temperature').subscribe('*', (e) => {
        if (e.action === 'create') {
          replaceTemperature(e.record);
        }
      });
    })();
  }, [isLoaded, temperatures]);

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {temperatures.map(temperature => (
          <Card key={temperature.id}>
            <CardBody>
              <p className='self-center'>{temperature.name}</p>
              <h1 className="text-4xl font-bold">
                {Math.round(temperature.temperature * 10) / 10}°C
              </h1>
            </CardBody>
          </Card>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
