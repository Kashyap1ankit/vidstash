"use client";

import React, { use, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Github, Link2, Pen } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { mona, sora } from "@/lib/font";

export default function ProfileComp() {
  const session = useSession();
  const [user, setUser] = useState<
    | {
        createdAt: string;
        email: string;
        id: string;
        image: string | null;
        name: string;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    setUser(session.data?.user);
  }, [session.status]);

  if (session.status === "loading") {
    return <div>Loading....</div>;
  }

  return (
    <div className=" mx-auto mb-2">
      <div className="flex flex-col gap-18 mt-6 ">
        {/* image details secton  */}
        <div className="bg-orange-50  cursor-pointer border rounded-2xl p-4">
          <div className="flex justify-between">
            <div className="flex gap-6 items-center">
              <Avatar className="size-24">
                <AvatarImage
                  src={user?.image || "https://github.com/shadcn.png"}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <p className={`${mona.className}  text-xl`}>{user?.name}</p>
                <p className={`${sora.className} text-gray-400 text-sm`}>
                  Patna, Bihar
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger
                className={`${mona.className} flex gap-4 items-center border-2 h-fit justify-center my-auto px-4 py-2 rounded-full cursor-pointer bg-primary-btn text-white`}
              >
                <p className="font-public_sans">Edit</p>
                <Pen className="size-4" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="text-primary-btn font-bold text-center">
                    Coming soon...
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* personal details section  */}
        <div className="bg-orange-50  cursor-pointer border rounded-2xl p-4">
          <div className="flex justify-between">
            <div className="flex gap-6 items-center">
              <p className={`${mona.className} text-2xl`}>
                Personal Information
              </p>
            </div>

            <Dialog>
              <DialogTrigger
                className={`${mona.className} flex gap-4 items-center border-2 h-fit justify-center my-auto px-4 py-2 rounded-full cursor-pointer bg-primary-btn text-white`}
              >
                <p className="font-public_sans">Edit</p>
                <Pen className="size-4" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="text-primary-btn font-bold text-center">
                    Coming soon....
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-y-12">
            <div>
              <p className="font-public_sans text-gray-400">First Name</p>
              <p className="font-public_sans font-bold">
                {user?.name.split(" ")[0]}
              </p>
            </div>
            <div>
              <p className="font-public_sans text-gray-400">Last Name</p>
              <p className="font-public_sans font-bold">
                {user?.name.split(" ").splice(1, user.name.length)}
              </p>
            </div>
            <div>
              <p className="font-public_sans text-gray-400">Email address</p>
              <p className="font-public_sans font-bold">{user?.email}</p>
            </div>{" "}
            <div>
              <p className="font-public_sans text-gray-400">Phone number</p>
              <p className="font-public_sans font-bold">null</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
