import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"

const expenses = [
   {
      category: "Groceries",
      amount: 120.5,
      date: "2024-02-20",
   },
   {
      category: "Transportation",
      amount: 45.0,
      date: "2024-02-19",
   },
   {
      category: "Entertainment",
      amount: 89.99,
      date: "2024-02-18",
   },
   {
      category: "Utilities",
      amount: 175.0,
      date: "2024-02-17",
   },
]

export default function ExpensesList() {
   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <CardDescription>You have spent $483 this month</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="space-y-8">
               {expenses.map((expense) => (
                  <div key={expense.date} className="flex items-center">
                     <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{expense.category}</p>
                        <p className="text-sm text-muted-foreground">{new Date(expense.date).toLocaleDateString()}</p>
                     </div>
                     <div className="ml-auto font-medium">${expense.amount.toFixed(2)}</div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>
   )
}
