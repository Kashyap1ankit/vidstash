"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <div>
      Dashboard
      <Button onClick={() => signOut({ redirectTo: "/login" })}>Signout</Button>
    </div>
  );
}
