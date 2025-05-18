import z from "zod";

export const signupSchema = z.object({
  name: z
    .string({ required_error: "Oops! You missed a spot." })
    .min(2, { message: "Make it little long" }),
  email: z
    .string({ required_error: "Oops! You missed a spot." })
    .email({ message: "Must be a email" }),
  password: z
    .string({ required_error: "Oops! You missed a spot." })
    .min(6, { message: "Password must be atleast 6 char long" })
    .max(10, { message: "Password can't be greater than 10 char" })
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
      message: "Must include a special character",
    })
    .regex(new RegExp(".*[0-9].*"), { message: "Must include a number" }),
});

export const signinSchema = z.object({
  email: z
    .string({ required_error: "Oops! You missed a spot." })
    .email({ message: "Must be a email" }),
  password: z
    .string({ required_error: "Oops! You missed a spot." })
    .min(6, { message: "Password must be atleast 6 char long" })
    .max(10, { message: "Password can't be greater than 10 char" })
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
      message: "Must include a special character",
    })
    .regex(new RegExp(".*[0-9].*"), { message: "Must include a number" }),
});

export const videoUploadSizeSchema = z.object({
  file: z.any().refine(
    (val) => {
      if (val) {
        return val.size < 2 * 1024 * 1024;
      }
      return true;
    },
    { message: "Video should be less than 500mb" }
  ),
});

export type signupSchemaType = z.infer<typeof signupSchema>;
export type signinSchemaType = z.infer<typeof signinSchema>;
export type videoUploadSizeSchemaType = z.infer<typeof videoUploadSizeSchema>;
