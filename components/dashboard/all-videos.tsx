import { mona } from "@/lib/font";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid2X2, Tally3 } from "lucide-react";
import TabularVideo from "./tabular";
import Grid from "./grid";

export default function AllVideos() {
  return (
    <div>
      <p className={`${mona.className} text-2xl`}>Welcome to Vidstash</p>

      <Tabs defaultValue="tabular" className="relative  mt-6">
        <TabsList className="absolute right-0">
          <TabsTrigger value="tabular">
            <Tally3 className="rotate-90 size-6 " />
          </TabsTrigger>
          <TabsTrigger value="grid">
            <Grid2X2 className=" size-6 " />
          </TabsTrigger>
        </TabsList>
        <div className="mt-12">
          <TabsContent value="tabular">
            <TabularVideo />
          </TabsContent>
          <TabsContent value="grid">
            <Grid />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
