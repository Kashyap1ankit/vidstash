"use client";

import { mona, sora } from "@/lib/font";
import {
  Download,
  Ellipsis,
  FolderOpen,
  Pen,
  Share2,
  Trash,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { resumeCards, upward } from "@/lib/constant";
import { motion } from "motion/react";

export default function Grid() {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      initial={upward.initial}
      animate={upward.animate}
    >
      {resumeCards.map((item) => {
        return (
          <div className="flex flex-col gap-4 bg-card-primary  rounded-2xl p-4 shadow-md">
            {/* header */}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FolderOpen className="size-4 text-primary-btn" />
                <p className={`${mona.className} font-bold`}>{item.filename}</p>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis className="rotate-90 size-4 cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Trash className="size-4 text-red-500 font-bold" />
                    <p className={`${sora.className} `}>Delete</p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <Share2 className="size-4 font-bold" />
                    <p className={`${sora.className} `}>Share</p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Download className="size-4 font-bold" />
                    <p className={`${sora.className} `}>Download</p>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Pen className="size-4 font-bold" />
                    <p className={`${sora.className} `}>Rename</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* thumbnail */}

            <div className="h-62 ">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="thumbnail"
                className="w-full h-full object-cover rounded-2xl bg-white"
              />
            </div>
            {/* footer */}

            <div className="flex gap-2 items-end text-gray-500">
              <Avatar className="size-6">
                <AvatarImage src={item.uploader.avatar} />
                <AvatarFallback>{item.uploader.fallback}</AvatarFallback>
              </Avatar>

              <p className={`${sora.className} text-xs tracking-wider`}>
                Uploaded at : <span>{item.uploadedAt}</span>
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
