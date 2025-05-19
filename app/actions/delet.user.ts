"use server";

import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function DeleteUser(email: string) {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Not Logged In");

    const isUserThere = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!isUserThere) throw new Error("No such user in db");

    const deletedUser = await prisma.user.delete({
      where: {
        email,
      },
    });
    if (!deletedUser) throw new Error("Error while deleting user");
    return {
      status: 201,
      message: "Account Deleted Successfully",
    };
  } catch (error) {
    return {
      status: 404,
      message: (error as Error).message,
    };
  }
}
