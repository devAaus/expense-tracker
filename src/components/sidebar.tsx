"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const routes = [
   {
      label: 'Dashboard',
      path: '/app/dashboard'
   },
   {
      label: 'Account',
      path: '/app/account'
   }
]

export default function Sidebar() {
   const pathname = usePathname();
   return (
      <div className="md:h-screen w-full py-8 px-5">
         <nav>
            <div className='space-y-2'>
               {routes.map(route => (
                  <div key={route.path}>
                     <Link href={route.path} className={`block p-2 rounded-md hover:bg-gray-300 ${pathname === route.path ? 'bg-gray-300 text-black' : ''}`}>
                        {route.label}
                     </Link>
                  </div>
               ))}
            </div>
         </nav>
      </div>
   );
}
