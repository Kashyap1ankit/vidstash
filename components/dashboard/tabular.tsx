import {
  Table,
  TableBody,
  TableCaption,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Ellipsis, Pen, Share2, Trash } from "lucide-react";
import { resumeCards } from "@/lib/constant";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function TabularVideo() {
  return (
    <div className="overflow-x-auto mt-6">
      <Table className="min-w-[700px]">
        <TableHeader>
          <TableRow
            className={`${mona.className} font-bold tracking-wider grid grid-cols-4`}
          >
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-center">Created at</TableHead>
            <TableHead className="text-center">Owner</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="space-y-4">
          {resumeCards.map((item, i) => (
            <TableRow
              key={i}
              className={`${sora.className} grid grid-cols-4 items-center p-4 bg-orange-50 hover:bg-orange-100 transition-colors duration-200 rounded-xl`}
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
                      <Share2 className="size-4" />
                      <p className={`${sora.className} ml-2`}>Share</p>
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
    </div>
  );
}
