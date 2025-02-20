import { DollarSign } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
   return (
      <header className="px-4 lg:px-6 h-16 flex items-center">
         <Link className="flex items-center justify-center" href="/">
            <DollarSign className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">ExpenseTracker</span>
         </Link>
         <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/app/dashboard">
               Dashboard
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/app/account">
               Account
            </Link>
         </nav>
      </header>
   )
}
