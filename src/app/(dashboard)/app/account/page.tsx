import AccountDetails from "@/components/account-details"

export default function Account() {
   return (
      <div className="flex-1 space-y-4">
         <div className="flex items-center justify-between space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Account</h2>
         </div>

         <AccountDetails />
      </div>
   )
}
