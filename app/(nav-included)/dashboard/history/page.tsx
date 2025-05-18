import HistoryTablur from "@/components/history/page";
import { mona } from "@/lib/font";
import React from "react";

export default function Home() {
  return (
    <div>
      <p className={`${mona.className} text-2xl`}>Shared Link History</p>
      <HistoryTablur />
    </div>
  );
}
