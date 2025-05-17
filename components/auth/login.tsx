"use client";

import { mona, sora } from "@/lib/font";
import { Eye, EyeOff, LockIcon, Mail, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { upward } from "@/lib/constant";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, signinSchemaType } from "@/schema/auth.validator";
import { toast } from "sonner";

export default function LoginComponent() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signinSchemaType>({
    resolver: zodResolver(signinSchema),
  });

  async function loggedInUser(data: signinSchemaType) {
    try {
      setLoading(true);
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response.error) throw new Error("Username / Password mismatched");
      toast.success("Redirecting....");
      router.push("/dashboard");
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      reset();
      setLoading(false);
    }
  }

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
            Welcome Back
          </p>
          <p
            className={`${sora.className} font-light text-gray-500 text-sm md:text-base`}
          >
            Super excited that you want to access your video
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(loggedInUser)}
        >
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
                {...register("email")}
              />
            </div>
            {errors.email?.message && (
              <p className={`${sora.className} mt-2 text-sm text-red-500`}>
                {errors.email?.message}
              </p>
            )}
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
                type={passwordVisible ? "text" : "password"}
                {...register("password")}
              />
              {passwordVisible ? (
                <EyeOff
                  className="text-gray-400 size-4 cursor-pointer"
                  onClick={() => setPasswordVisible(false)}
                />
              ) : (
                <Eye
                  className="text-gray-400 size-4 cursor-pointer"
                  onClick={() => setPasswordVisible(true)}
                />
              )}
            </div>
            {errors.password?.message && (
              <p className={`${sora.className} mt-2 text-sm text-red-500`}>
                {errors.password?.message}
              </p>
            )}
          </div>

          <Button
            className={`${mona.className} rounded-3xl py-4 md:py-6 tracking-wider  cursor-pointer`}
            type="submit"
            disabled={loading}
          >
            <p> {loading ? "Signing...." : "Sign In"}</p>
          </Button>
        </form>

        <Button
          className={`${mona.className} rounded-3xl py-4 md:py-6 tracking-wider bg-transparent hover:bg-transparent cursor-pointer border text-black`}
          onClick={() => signIn("google", { redirectTo: "/dashboard" })}
        >
          <FcGoogle className="size-6" />
          <p>Sign in with Google</p>
        </Button>
        <p className={`${mona.className} text-center text-gray-500`}>
          New to Website?{" "}
          <Link href={"/signup"} className={`text-black cursor-pointer`}>
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
