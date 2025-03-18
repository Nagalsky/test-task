import { z } from "zod";

const getPasswordSchema = () =>
  z
    .string()
    .min(4, "Password must be atleast 4 characters")
    .max(32, "Password can not exceed 32 characters");

const getEmailSchema = () =>
  z.string().min(1, "Email is required").email("Invalid email");

export const SignUpSchema = z
  .object({
    email: getEmailSchema(),
    password: getPasswordSchema(),
    passwordConfirmation: getPasswordSchema(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

export const SignInSchema = z.object({
  email: getEmailSchema(),
  password: z.string().min(1, "Please enter a valid password"),
});
