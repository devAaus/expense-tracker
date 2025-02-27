import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import PurchaseButton from './purchase-btn';
import { prisma } from '@/lib/db';

export default async function HeroSection() {
   const { isAuthenticated, getUser } = getKindeServerSession();
   const isLoggedIn = await isAuthenticated();
   let isPayingMember = false;

   const user = await getUser();
   if (user) {
      const membership = await prisma.membership.findFirst({
         where: {
            userId: user.id,
            status: "active",
         },
      });
      if (membership) {
         isPayingMember = true;
      }
   }

   return (
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
               <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                     Track Your Expenses with Ease
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                     Stay on top of your finances with our simple and intuitive expense tracking solution.
                  </p>
               </div>
               <div className="flex flex-col gap-4">
                  <Button asChild>
                     <Link href="/app/dashboard">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                  </Button>
                  {isLoggedIn && !isPayingMember && <PurchaseButton />}
               </div>
            </div>
         </div>
      </section>
   )
}
