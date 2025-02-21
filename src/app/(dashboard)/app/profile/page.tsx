import AccountDetails from "@/components/account-details"
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { User } from "@/lib/type";

export default async function Profile() {
   const { user } = await checkAuthenticationAndMembership();
   return (
      <div className="flex-1 space-y-4">
         <div className="flex items-center justify-between space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Account</h2>
         </div>

         <AccountDetails user={user as User} />
      </div>
   )
}
