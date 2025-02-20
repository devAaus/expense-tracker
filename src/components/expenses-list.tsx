import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"

type ExpensesListProps = {
   expenses: {
      id: number;
      description: string;
      amount: number;
      createdAt: Date;
      updatedAt: Date;
   }[]
}

export default async function ExpensesList({ expenses }: ExpensesListProps) {
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
                     <div className="ml-auto font-medium">${expense.amount.toFixed(2)}</div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>
   )
}
