"use server";

import { saltRounds } from "@/lib/constant";
import { prisma } from "@/prisma";
import { signupSchema, signupSchemaType } from "@/schema/auth,validator";
import bcrypt from "bcryptjs";

export async function createAccount(formData: signupSchemaType) {
  try {
    const { success } = signupSchema.safeParse(formData);
    if (!success) throw new Error("Signup form validation error");

    const isNewUser = await prisma.user.findFirst({
      where: {
        email: formData.email,
      },
    });

    if (isNewUser) throw new Error("User already exits");

    const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

    await prisma.user.create({
      data: {
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      },
    });

    return {
      status: 200,
      message: "User signup successfull",
    };
  } catch (error) {
    return {
      status: 400,
      message: (error as Error).message,
    };
  }
}
