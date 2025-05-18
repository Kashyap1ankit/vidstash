import AllVideos from "@/components/dashboard/all-videos";
import FileUpload from "@/components/dashboard/file-upload";

export default function Dashboard() {
  return (
    <div className="mb-4">
      <FileUpload />
      <AllVideos />
    </div>
  );
}
