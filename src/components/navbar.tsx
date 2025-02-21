import { DollarSign } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import AvatarDropdown from './avatar-dropdown';
import { User } from '@/lib/type';

export default async function Navbar() {
   const { isAuthenticated, getUser } = getKindeServerSession();
   const isLoggedIn = await isAuthenticated();
   const user = await getUser();

   return (
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-zinc-400">
         <Link className="flex items-center justify-center" href="/">
            <DollarSign className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">ExpenseTracker</span>
         </Link>
         <nav className="flex gap-4 items-center sm:gap-6">
            {isLoggedIn ? (
               <AvatarDropdown user={user as User} />
            ) : (
               <>
                  <LoginLink>
                     <Button variant={'ghost'}>Log In</Button>
                  </LoginLink>
                  <RegisterLink>
                     <Button>Sign Up</Button>
                  </RegisterLink>
               </>
            )}
         </nav>
      </header>
   )
}
