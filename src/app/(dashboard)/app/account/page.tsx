import AccountDetails from "@/components/account-details"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Account() {
   // authentication check
   const { isAuthenticated } = getKindeServerSession();
   if (!(await isAuthenticated())) {
      return redirect("/api/auth/login");
   }
   return (
      <div className="flex-1 space-y-4">
         <div className="flex items-center justify-between space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Account</h2>
         </div>

         <AccountDetails />
      </div>
   )
}
