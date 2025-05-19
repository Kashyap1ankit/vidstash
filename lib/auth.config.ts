import Google from "next-auth/providers/google";

import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "@/schema/auth.validator";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";

export const AuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      authorize: async (credentials: any) => {
        try {
          const { success } = signinSchema.safeParse({
            email: credentials.email,
            password: credentials.password,
          });

          if (!success) throw new Error("Validation failed");

          const isUserInDb = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (!isUserInDb)
            throw new Error("User with this email doesn't exist");

          const checkPassword = await bcrypt.compare(
            credentials.password,
            isUserInDb.password as string
          );

          if (!checkPassword) {
            throw new Error("Password is wrong");
          }

          return {
            id: isUserInDb.id,
            name: isUserInDb.name ?? "",
            email: isUserInDb.email,
            image: isUserInDb.image ?? "",
            createdAt: isUserInDb.createdAt.toISOString(),
          };
        } catch {
          return null;
        }
      },
    }),
    Google,
  ],
};
