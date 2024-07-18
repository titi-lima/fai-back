import z from "zod";

export const createUserSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .regex(/^[a-zA-Z\s]+$/),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const updateUserSchema = createUserSchema.partial();
