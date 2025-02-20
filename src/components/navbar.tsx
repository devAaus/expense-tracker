"use client"

import { DollarSign } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';

export default function Navbar() {
   const pathname = usePathname();
   return (
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-zinc-400">
         <Link className="flex items-center justify-center" href="/">
            <DollarSign className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">ExpenseTracker</span>
         </Link>
         <nav className="ml-auto flex gap-4 items-center sm:gap-6">
            <Link className={`text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ${pathname === '/app/dashboard' ? 'underline underline-offset-4' : ''}`} href="/app/dashboard">
               Dashboard
            </Link>
            <Button variant={'destructive'}>
               Log Out
            </Button>
         </nav>
      </header>
   )
}
