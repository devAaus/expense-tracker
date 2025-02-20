"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavLink() {
   const pathname = usePathname();
   return (
      <Link
         className={`text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ${pathname === '/app/dashboard' ? 'underline underline-offset-4' : ''}`}
         href="/app/dashboard"
      >
         Dashboard
      </Link>
   )
}
