"use client";

import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  const [val, setVal] = useState<string | undefined>(undefined);
  const inptRef = useRef<null | HTMLInputElement>(null);

  function handleIconClick() {
    if (inptRef && inptRef.current) {
      inptRef.current?.click();
    }
  }

  useEffect(() => {
    console.log(val);
  }, [val]);
  return (
    <div className="relative">
      <div className="">
        <Input
          id="picture"
          type="file"
          accept="video/*"
          ref={inptRef}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="hidden"
        />

        <div
          className="group border shadow-xl text-white cursor-pointer w-fit  p-4 rounded-full bg-orange-500 fixed bottom-12 right-12"
          onClick={handleIconClick}
        >
          <CloudUpload className="group-hover:animate-bounce duration-300" />
        </div>
      </div>
    </div>
  );
}
