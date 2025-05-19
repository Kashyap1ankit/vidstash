"use client";

import { Input } from "@/components/ui/input";
import { Clapperboard, CloudUpload } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { mona, sora } from "@/lib/font";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  videoUploadSizeSchema,
  videoUploadSizeSchemaType,
} from "@/schema/auth.validator";

export default function FileUpload() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<videoUploadSizeSchemaType>({
    resolver: zodResolver(videoUploadSizeSchema),
  });

  function handleIconClick() {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      setValue("file", files[0], { shouldValidate: true });
      setVideoFile(files[0]);
    }
  }
  function handleVideoUpload(data: videoUploadSizeSchemaType) {
    console.log(data);
  }

  useEffect(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (videoFile) {
      const objectUrl = URL.createObjectURL(videoFile);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [videoFile]);

  return (
    <div className="relative z-999">
      <Dialog>
        <DialogTrigger className="group border shadow-xl text-white cursor-pointer w-fit p-4 rounded-full bg-primary-btn fixed bottom-6 md:bottom-12 right-6 md:right-12">
          <CloudUpload className="group-hover:animate-bounce duration-300" />
        </DialogTrigger>
        <DialogContent className="mx-auto  max-h-[500px] md:max-h-[600px] overflow-y-scroll">
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
                Support MP4, MOV, AVI, MKV & WMV up to 500mb
              </p>
            </div>

            {previewUrl && (
              <video
                key={previewUrl}
                width="400"
                controls
                className="mx-auto  max-h-[500px] md:max-h-[600px] overflow-y-scroll"
              >
                <source
                  src={previewUrl}
                  type="video/mp4"
                  className="mx-auto  max-h-[500px] md:max-h-[600px] overflow-y-scroll"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <form onSubmit={handleSubmit(handleVideoUpload)}>
            <Input
              id="video"
              type="file"
              accept="video/*"
              className="hidden"
              {...register("file")}
              ref={inputRef}
              onChange={handleFileChange}
            />

            {typeof errors.file?.message === "string" && (
              <p className="text-sm text-red-500 mt-2">{errors.file.message}</p>
            )}

            <Button
              className="w-full mt-6 bg-primary-btn hover:bg-primary-btn cursor-pointer"
              disabled={!videoFile}
              type="submit"
            >
              <p className={`${sora.className} font-bold`}>Upload</p>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
