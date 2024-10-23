"use Client";

import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="px-[100px] pt-5">
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
