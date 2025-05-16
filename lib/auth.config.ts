import Google from "next-auth/providers/google";

import Credentials from "next-auth/providers/credentials";

export const AuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        return user;
      },
    }),
    Google,
  ],
};
