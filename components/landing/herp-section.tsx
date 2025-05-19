"use client";

import { mona, sora } from "@/lib/font";
import { motion } from "motion/react";
import {
  ArrowUpToLine,
  ChevronsLeftRight,
  Database,
  Video,
} from "lucide-react";
import Link from "next/link";
import { blurIn, upward } from "@/lib/constant";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.div
      initial={upward.initial}
      animate={upward.animate}
      className="flex flex-col lg:flex-row items-center gap-12 justify-between px-4 sm:px-8"
    >
      {/* left side  */}
      <div className="w-full lg:w-1/2">
        <motion.p
          className={`${mona.className} text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center lg:text-left`}
          initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
        >
          Upload Fast, Share Smart,
          <span className="text-primary-btn font-bold"> Store Forever</span>
        </motion.p>

        <p
          className={`${sora.className} mt-4 w-full  md:w-3/4 lg:w-full xl:w-1/2 text-gray-500 font-medium mx-auto lg:mx-0 text-center lg:text-left`}
        >
          VidStash lets you upload, preview, and share videos securely — with
          real-time status, link controls, and effortless access.
        </p>

        <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center mt-12 w-full">
          <Link href="/login">
            <div className="flex gap-2 items-center justify-center py-4 px-3 rounded-2xl text-white bg-primary-btn hover:bg-primary-btn cursor-pointer min-w-[200px]">
              <p className={`${mona.className} text-md`}>
                Upload Your First Video
              </p>
              <Video />
            </div>
          </Link>

          <Link href="/dashboard">
            <div className="flex gap-2 items-center justify-center py-4 px-3 rounded-2xl text-black border border-primary-btn bg-transparent hover:bg-transparent hover:text-black cursor-pointer min-w-[200px]">
              <p className={`${mona.className} text-md`}>View Dashboard</p>
              <ChevronsLeftRight />
            </div>
          </Link>
        </div>
      </div>

      {/* right side  */}
      <motion.div
        initial={blurIn.initial}
        whileInView={blurIn.animate}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
      >
        <Image
          src="/hero.png"
          width={500}
          height={500}
          alt="hero"
          className="object-cover w-full max-w-[500px] h-auto rounded-2xl shadow-2xl shadow-secondary-bg aspect-[3/2]"
        />

        <div className="hidden md:flex absolute top-2 right-2 md:top-0 md:right-12 lg:-right-12 flex gap-2 items-center bg-primary-btn text-white rounded-full py-2 px-3 z-20 shadow-md animate-[bounce_5s_ease-in-out_infinite]">
          <ArrowUpToLine className="bg-white rounded-full text-black p-2 w-8 h-8" />
          <p className={`${mona.className} text-sm`}>Faster Uploads</p>
        </div>

        <div className="hidden md:flex absolute bottom-2 left-2 md:bottom-0 md:left-12 lg:-left-12 flex gap-2 items-center bg-primary-bg text-black rounded-full py-2 px-3 z-20 shadow-md animate-[bounce_5s_ease-in-out_infinite]">
          <Database className="bg-white rounded-full text-black p-2 w-8 h-8" />
          <p className={`${mona.className} text-sm`}>Secure Storage</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
