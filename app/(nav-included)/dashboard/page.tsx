"use client";

import { Input } from "@/components/ui/input";
import { Clapperboard, CloudUpload } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { mona, sora } from "@/lib/font";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleIconClick() {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      setVideoFile(files[0]);
    }
  }

  useEffect(() => {
    // Clean up previous object URL to prevent memory leaks
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    // Create new object URL if we have a video file
    if (videoFile) {
      const objectUrl = URL.createObjectURL(videoFile);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }

    // Clean up when component unmounts or when dependency changes
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [videoFile]);

  return (
    <div className="relative">
      <Input
        id="video"
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <Dialog>
        <DialogTrigger className="group border shadow-xl text-white cursor-pointer w-fit p-4 rounded-full bg-primary-btn fixed bottom-12 right-12">
          <CloudUpload className="group-hover:animate-bounce duration-300" />
        </DialogTrigger>
        <DialogContent>
          <div
            className="border-2 rounded-2xl border-dashed p-6 cursor-pointer"
            onClick={handleIconClick}
          >
            <div className="w-fit p-6 bg-green-100 rounded mx-auto text-green-600 rounded-md flex items-center justify-center">
              <Clapperboard className="size-8" />
            </div>

            <div className="my-6 text-center">
              <p className={`${mona.className} text-lg`}>
                Drop your video here or{" "}
                <span className="text-organg-500 font-bold">browse</span>
              </p>
              <p className={`${sora.className} text-xs text-gray-400`}>
                Support MP4, MOV, AVI MKV & WMV up to 500mb
              </p>
            </div>

            {previewUrl && (
              <video key={previewUrl} width="400" controls className="mx-auto">
                <source src={previewUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <Button
              className="w-full mt-6 bg-primary-btn hover:bg-primary-btn cursor-pointer"
              disabled={!videoFile}
            >
              <p className={`${sora.className} font-bold`}>Upload</p>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
