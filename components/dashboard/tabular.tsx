"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mona, sora } from "@/lib/font";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Ellipsis, Pen, Trash } from "lucide-react";
import { resumeCards, upward } from "@/lib/constant";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { motion } from "motion/react";
import ShareComp from "../share";

export default function TabularVideo() {
  return (
    <motion.div
      className="overflow-x-auto mt-6"
      initial={upward.initial}
      animate={upward.animate}
    >
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow
            className={`${mona.className} font-bold tracking-wider grid grid-cols-5`}
          >
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-center">Created at</TableHead>
            <TableHead className="text-center">Owner</TableHead>
            <TableHead className="text-center">Share</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="space-y-4">
          {resumeCards.map((item, i) => (
            <TableRow
              key={i}
              className={`${sora.className} grid grid-cols-5 items-center p-4 bg-orange-50 hover:bg-orange-100 transition-colors duration-200 rounded-xl cursor-pointer`}
            >
              <TableCell className="text-left font-bold">
                {item.filename}
              </TableCell>
              <TableCell className="text-center">{item.uploadedAt}</TableCell>
              <TableCell className="text-center">
                <Avatar className="size-6 mx-auto">
                  <AvatarImage src={item.uploader.avatar} />
                  <AvatarFallback>{item.uploader.fallback}</AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell className="text-center">
                <ShareComp id={item.id} />
              </TableCell>

              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className="size-4 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Trash className="size-4 text-red-500" />
                      <p className={`${sora.className} ml-2`}>Delete</p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                      <Download className="size-4" />
                      <p className={`${sora.className} ml-2`}>Download</p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Pen className="size-4" />
                      <p className={`${sora.className} ml-2`}>Rename</p>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
