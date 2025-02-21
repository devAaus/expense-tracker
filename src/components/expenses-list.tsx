"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { deleteExpense } from "@/actions/actions";
import { Pencil } from "lucide-react";
import { ExpensesListProps } from "@/lib/type";
import ExpenseCard from "./expense-card";


export default function ExpensesList(
   { expenses }: ExpensesListProps
) {
   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>You have spent $483 this month</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="space-y-4">
               {expenses.map((expense) => (
                  <ExpenseCard key={expense.id} expense={expense} />
               ))}
            </div>
         </CardContent>
      </Card>
   )
}
