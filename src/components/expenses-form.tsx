"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { addExpense } from "@/actions/actions"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ExpenseFormData, expenseSchema } from "@/lib/zod-schema"


export default function ExpensesForm() {

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset
   } = useForm<ExpenseFormData>({
      resolver: zodResolver(expenseSchema)
   })

   const onSubmit = async (data: ExpenseFormData) => {

      // Convert data to FormData
      const formData = new FormData()
      formData.append("description", data.description)
      formData.append("amount", data.amount)

      try {
         await addExpense(formData)
         reset()
      } catch (err) {
         console.error("Failed to add expense", err)
      }
   }

   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Expense Form</CardTitle>
            <CardDescription>Add a new expense entry</CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div>
                  <Input type="text" placeholder="Description" {...register("description")} />
                  {errors.description && (
                     <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                  )}
               </div>

               <div>
                  <Input type="number" placeholder="Amount" {...register("amount")} />
                  {errors.amount && (
                     <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
                  )}
               </div>

               <Button type="submit" className="w-full mt-4">
                  Add Expense
               </Button>
            </form>
         </CardContent>
      </Card>
   )
}
