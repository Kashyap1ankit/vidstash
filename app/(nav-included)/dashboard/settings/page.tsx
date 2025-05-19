import React from "react";
import { mona } from "@/lib/font";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import DeleteComp from "@/components/settings/delete";

export default function Settings() {
  return (
    <div>
      <p className={`${mona.className} text-2xl`}>Settings</p>
      <DropdownMenuSeparator />
      <div className="flex flex-col gap-12 mt-6">
        <DeleteComp />
      </div>
    </div>
  );
}
