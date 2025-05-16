import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    name?: string;
    createdAt?: DateTime;
  }

  interface Session {
    user: {
      id: string;
      name: string;
    } & DefaultUser;
  }
}
