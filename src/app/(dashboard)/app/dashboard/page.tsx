import ExpensesForm from "@/components/expenses-form"
import ExpensesList from "@/components/expenses-list"
import { prisma } from "@/lib/db";

export default async function Dashboard() {
   const expenses = await prisma.expense.findMany();
   return (
      <div className="flex-1 space-y-4">
         <div className="flex items-center justify-between space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Dashboard</h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
               <ExpensesForm />
            </div>
            <div className="lg:col-span-2">
               <ExpensesList expenses={expenses} />
            </div>
         </div>
      </div>
   )
}
