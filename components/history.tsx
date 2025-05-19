"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, EyeOff } from "lucide-react";
import { historyData, upward } from "@/lib/constant";
import { motion } from "motion/react";
import { mona, sora } from "@/lib/font";

export default function HistoryTablur() {
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
            <TableHead className="text-left">Id</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-right">Created at</TableHead>
            <TableHead className="text-right">Expiry</TableHead>
            <TableHead className="text-center">Type</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="space-y-4">
          {historyData.map((item, i) => (
            <TableRow
              key={i}
              className={`${sora.className} grid grid-cols-5 items-center p-4 bg-orange-50 hover:bg-orange-100 transition-colors duration-200 rounded-xl cursor-pointer`}
            >
              <TableCell className="text-left font-bold">#{item.id}</TableCell>
              <TableCell className="text-center">{item.name}</TableCell>
              <TableCell className="text-right">{item.createdAt}</TableCell>
              <TableCell className="text-right">13may 2020</TableCell>
              <TableCell className="text-center flex gap-2 items-center justify-center">
                {item.type === "PRIVATE" ? (
                  <EyeOff className="size-4 text-gray-500" />
                ) : (
                  <Eye className="size-4 text-gray-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
