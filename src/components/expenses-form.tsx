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

export default function ExpensesForm() {
   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Expense Form</CardTitle>
            <CardDescription></CardDescription>
         </CardHeader>
         <CardContent>
            <form action={addExpense}>
               <div className="space-y-2">
                  <Input
                     type="text"
                     name="description"
                     placeholder="Description"
                  />
                  <Input
                     type="number"
                     name="amount"
                     placeholder="Amount"
                  />
               </div>
               <Button type="submit" className="w-full mt-4">
                  Add expense
               </Button>
            </form>
         </CardContent>
      </Card>
   )
}
