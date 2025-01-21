import { z} from "zod";

export const adminLoginSchema = z.object({
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password is required"),
  });

  export const AdminSignInSchema = z.object({
    firstname : z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    number:z.string().min(1,"Enter number"),
    work: z.string().min(1,"fill out this field"),
  })

  export const UserSignInSchema = z.object({
    firstname : z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
    email: z.string().min(1,"Email is required").email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    number:z.string().min(1,"Enter number"),

    work: z.string().min(1,"fill out this field"),
  })

  export const AddQuestionSchema = z.object({
    question: z.string().min(1, "Question is required"),
    answer: z.string().min(1, "Answer is required"),
    option1:z.string().min(1, "Option 1 is required"),
    option2:z.string().min(1, "Option 2 is required"),
    option3:z.string().min(1, "Option 3 is required"),
    option4:z.string().min(1, "Option 4 is required"),
  })
  export const UpdateQuestionSchema = z.object({
    id: z.string().min(1, "id is required"),
    question: z.string().min(1, "Question is required"),
    answer: z.string().min(1, "Answer is required"),
    option1:z.string().min(1, "Option 1 is required"),
    option2:z.string().min(1, "Option 2 is required"),
    option3:z.string().min(1, "Option 3 is required"),
    option4:z.string().min(1, "Option 4 is required"),
  })