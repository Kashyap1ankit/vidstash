"use client";

import { mona, sora } from "@/lib/font";
import { Loader, TriangleAlert } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { deleteUserSchema, deleteUserType } from "@/schema/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { signOut, useSession } from "next-auth/react";
import Randomstring from "randomstring";
import { DeleteUser } from "@/app/actions/delete.user";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { sideward } from "@/lib/constant";

export default function DeleteComp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<deleteUserType>({
    resolver: zodResolver(deleteUserSchema),
  });

  const session = useSession();

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [randomString, setRandomString] = useState<string>(
    Randomstring.generate(8)
  );

  async function handleDeleteAccount(data: deleteUserType) {
    setLoading(true);
    try {
      if (!session.data?.user?.id) throw new Error("No user loggedin");

      if (data.random !== randomString) {
        setInputError(true);
        setRandomString(Randomstring.generate(8));
        return;
      }

      const response = await DeleteUser(session.data?.user.email);

      if (response.status !== 201) throw new Error(response.message);
      setModalOpen(false);
      signOut();
    } catch {
      toast("Error Occured");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div initial={sideward.initial} animate={sideward.animate}>
      <p className={`${mona.className} text-xl text-red-600`}>Delete Account</p>
      <div className={` flex items-start gap-4 mt-4`}>
        <TriangleAlert className="size-8 text-primary-btn" />
        <p className={`${sora.className} text-sm text-gray-500 `}>
          Deleting your account is a permanent action and cannot be undone. Once
          deleted, all your data — including your profile, posts, comments,
          saved content, and personal settings — will be permanently erased and
          cannot be recovered. Please proceed only if you're sure you want to
          close your account permanently
        </p>
      </div>

      <AlertDialog open={modalOpen}>
        <AlertDialogTrigger className="mt-8 w-full">
          <div
            className={`${sora.className} w-full cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white  sm:w-fit`}
            onClick={() => setModalOpen(true)}
          >
            Delete
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-[300px] rounded-md bg-white md:max-w-[450px]">
          <AlertDialogHeader className={sora.className}>
            <AlertDialogTitle className="">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>

              <form
                className="mt-6"
                onSubmit={handleSubmit(handleDeleteAccount)}
              >
                <label className={`${mona.className} `} htmlFor="random">
                  Type <span className="text-red-500">{randomString}</span>
                </label>
                <input
                  {...register("random")}
                  id="random"
                  className="mt-2 w-full rounded-md bg-gray-100 p-2 p-4  outline-none"
                  onPaste={(e) => e.preventDefault()}
                />
                {errors.random?.message && (
                  <p className="mt-2 text-red-500">{errors.random?.message}</p>
                )}
                {inputError && (
                  <p className="mt-2 text-red-500">Mismatched , Try again</p>
                )}

                <div className="flex items-baseline gap-2">
                  <Button
                    disabled={loading}
                    className="mt-4 bg-red-500  hover:bg-red-500"
                    aria-label="delete-yes"
                  >
                    {loading ? <Loader className="animate-spin" /> : "Yes"}
                  </Button>

                  <div
                    className="cursor-pointer rounded-md border-2 border-slate-500 bg-transparent px-4 py-2  hover:bg-transparent"
                    onClick={() => setModalOpen(false)}
                  >
                    <p>No</p>
                  </div>
                </div>
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}
