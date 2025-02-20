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
            <div className="space-y-8">
               {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center">
                     <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{expense.description}</p>
                        <p className="text-sm text-muted-foreground">{new Date(expense.createdAt).toLocaleDateString()}</p>
                     </div>
                     <div className="ml-auto flex items-center space-x-4">
                        <div className=" font-medium">${expense.amount.toFixed(2)}</div>
                        <Button variant={'secondary'}>
                           <Pencil />
                        </Button>
                        <Button
                           onClick={async () => {
                              await deleteExpense(expense.id)
                           }}
                           variant={'destructive'}
                        >
                           X
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>
   )
}
