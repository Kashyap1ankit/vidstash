import ProfileComp from "@/components/profile";
import { mona } from "@/lib/font";

export default function Shared() {
  return (
    <div>
      <p className={`${mona.className} text-2xl`}>Profile</p>
      <ProfileComp />
    </div>
  );
}
