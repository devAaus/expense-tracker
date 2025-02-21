import { getExpenses } from "@/actions/actions";
import ExpensesForm from "@/components/expenses-form"
import ExpensesList from "@/components/expenses-list"
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { redirect } from "next/navigation";

export default async function Dashboard({
   searchParams,
}: {
   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
   const paymentValueFromUrl = (await searchParams).payment;
   await checkAuthenticationAndMembership(
      paymentValueFromUrl === "success" ? 5000 : 0
   );
   if (paymentValueFromUrl === "success") {
      return redirect("/app/dashboard");
   }
   const expenses = await getExpenses();

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
