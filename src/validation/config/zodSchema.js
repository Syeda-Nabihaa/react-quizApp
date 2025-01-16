import {z} from "zod";

export const adminLoginSchema = z.object({
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password is required"),
  });

  export const AdminSignInSchema = z.object({
    firstname : z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    work: z.string().min(1,"fill out this field"),
  })

  export const UserSignInSchema = z.object({
    firstname : z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    work: z.string().min(1,"fill out this field"),
  })