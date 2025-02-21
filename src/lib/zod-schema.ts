import { z } from "zod";

// Define validation schema with Zod
export const expenseSchema = z.object({
   description: z
      .string()
      .min(1, "Description is required")
      .min(3, "Description must be at least 3 characters"),
   amount: z
      .string()
      .min(1, "Amount is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Amount must be a positive number")
})

// Define form types
export type ExpenseFormData = z.infer<typeof expenseSchema>