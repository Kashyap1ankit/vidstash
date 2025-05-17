import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    createdAt: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      createdAt: string;
    } & DefaultUser;
  }
}
