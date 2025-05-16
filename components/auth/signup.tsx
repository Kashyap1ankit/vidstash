"use client";

import { mona, sora } from "@/lib/font";
import { EyeOff, LockIcon, Mail, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { upward } from "@/lib/constant";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function SignupComponent() {
  return (
    <motion.div
      initial={upward.initial}
      animate={upward.animate}
      className="flex flex-col md:flex-row items-center justify-center  min-h-dvh gap-10 md:gap-24 "
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://images.pexels.com/photos/27396198/pexels-photo-27396198/free-photo-of-a-laptop-with-a-camera-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={500}
          height={500}
          alt="signup-img"
          className="rounded-2xl object-cover w-full h-full max-h-[400px] md:max-h-dvh mt-3"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-center">
          <Image
            src="/vidstash.png"
            width={300}
            height={300}
            alt="logo"
            className="mx-auto w-40 md:w-52 object-contain"
          />
          <p
            className={`${sora.className} font-bold text-2xl md:text-3xl lg:text-4xl`}
          >
            Create new account
          </p>
          <p
            className={`${sora.className} font-light text-gray-500 text-sm md:text-base`}
          >
            Secure & Safe storage for your videos
          </p>
        </div>

        <form className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="full-name"
              className={`${sora.className} font-light`}
            >
              Full name
            </label>
            <div className="flex items-center gap-2 bg-white rounded-2xl border px-2 py-3">
              <User className="text-gray-400 size-4" />
              <input
                className={`w-full outline-none bg-white ${sora.className} placeholder:text-gray-400`}
                placeholder="Enter name"
                id="full-name"
                type="text"
                name="name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={`${sora.className} font-light`}>
              Email
            </label>
            <div className="flex items-center gap-2 bg-white rounded-2xl border px-2 py-3">
              <Mail className="text-gray-400 size-4" />
              <input
                className={`w-full outline-none bg-white ${sora.className} placeholder:text-gray-400`}
                placeholder="Enter email"
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className={`${sora.className} font-light`}
            >
              Password
            </label>
            <div className="flex items-center gap-2 bg-white rounded-2xl border px-2 py-3">
              <LockIcon className="text-gray-400 size-4" />
              <input
                className={`w-full outline-none bg-white ${sora.className} placeholder:text-gray-400`}
                placeholder="Enter password"
                id="password"
                type="password"
                name="password"
              />
              <EyeOff className="text-gray-400 size-4 cursor-pointer" />
            </div>
          </div>

          <Button
            className={`${mona.className} rounded-3xl py-4 md:py-6 tracking-wider  cursor-pointer`}
            type="submit"
          >
            Sign Up
          </Button>

          <Button
            className={`${mona.className} rounded-3xl py-4 md:py-6 tracking-wider bg-transparent hover:bg-transparent cursor-pointer border text-black`}
            type="submit"
          >
            <FcGoogle className="size-6" />
            <p>Sign Up with Google</p>
          </Button>
        </form>

        <p className={`${mona.className} text-center text-gray-500`}>
          Already have account?{" "}
          <Link href={"/login"} className={`text-black cursor-pointer`}>
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
