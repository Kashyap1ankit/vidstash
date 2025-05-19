"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { sora } from "@/lib/font";
import { CopyCheckIcon, CopyIcon, Share2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  shareVideoSchema,
  shareVideoSchemaType,
} from "@/schema/auth.validator";
import { v4 as uuidv4 } from "uuid";

export default function ShareComp({ id }: { id: string }) {
  const [visibility, setVisibility] = useState<"PRIVATE" | "PUBLIC">("PUBLIC");
  const [emailAddress, setEmailAddresses] = useState<string[] | []>([]);
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<shareVideoSchemaType>({
    resolver: zodResolver(shareVideoSchema),
  });
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  function saveSharedLink() {
    setShareUrl(`${process.env.NEXT_PUBLIC_CLIENT_URL}/${id}/${uuidv4()}`);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Share2 className="size-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className={`${sora.className}`}>
            <form
              onSubmit={handleSubmit(saveSharedLink)}
              className="flex flex-col gap-8"
            >
              <div>
                <Select
                  {...register("visibility")}
                  onValueChange={(e: "PRIVATE" | "PUBLIC") => {
                    setVisibility(e);
                    setValue("visibility", e);
                  }}
                >
                  <p className="font-bold mb-2 text-black">Select Visibility</p>
                  <SelectTrigger className="w-full">
                    {" "}
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="PRIVATE">PRIVATE</SelectItem>
                    <SelectItem value="PUBLIC">PUBLIC</SelectItem>
                  </SelectContent>
                </Select>

                {errors.visibility?.message && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.visibility?.message}
                  </p>
                )}
              </div>

              <div>
                <Select
                  {...register("expiry")}
                  onValueChange={(e: "1hr" | "30min" | "12hr" | "24hr") => {
                    setValue("expiry", e);
                  }}
                >
                  <p className="font-bold mb-2 text-black">
                    Select Expiry time
                  </p>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="1hr">1hr</SelectItem>
                    <SelectItem value="30min">30min</SelectItem>
                    <SelectItem value="12hr">12hr</SelectItem>
                    <SelectItem value="24hr">24hr</SelectItem>
                  </SelectContent>
                </Select>

                {errors.expiry?.message && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.expiry?.message}
                  </p>
                )}
              </div>

              {visibility === "PRIVATE" ? (
                <div>
                  <label className="font-bold mb-2 text-black">
                    Enter Email Addresses
                  </label>

                  <Input
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        e.currentTarget.value.trim() !== ""
                      ) {
                        e.preventDefault();

                        const value = e.currentTarget.value.trim();

                        const newEmailAddresses = [...emailAddress, value];

                        setEmailAddresses(newEmailAddresses);
                        setValue("email_addresses", newEmailAddresses, {
                          shouldValidate: true,
                        });

                        e.currentTarget.value = "";
                      }
                    }}
                  />

                  {emailAddress?.length > 0 && (
                    <div className="flex gap-2  mt-4">
                      {emailAddress.map((e, i) => (
                        <p
                          className="rounded-full bg-gray-200 p-2 text-black"
                          key={i}
                        >
                          {e}
                        </p>
                      ))}
                    </div>
                  )}

                  {errors.email_addresses?.message && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.email_addresses?.message}
                    </p>
                  )}
                </div>
              ) : null}

              <Button type="submit">Generate</Button>
            </form>

            {shareUrl ? (
              <div className="flex items-center gap-2 w-full mt-6 p-2 bg-gray-200 rounded-2xl">
                <p className="w-full break-all">{shareUrl}</p>

                {!copied ? (
                  <CopyIcon
                    className="cursor-pointer size-4 bg-white h-full w-fit p-2 rounded-md"
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl).then(() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                      });
                    }}
                  />
                ) : (
                  <CopyCheckIcon className="cursor-pointer size-4 bg-green-500 text-white h-full w-fit p-2 rounded-md" />
                )}
              </div>
            ) : null}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
