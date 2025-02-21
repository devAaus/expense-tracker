"use server"

import { prisma } from "@/lib/db"
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import Stripe from "stripe";

export async function getExpenses() {
   const { user } = await checkAuthenticationAndMembership();
   return await prisma.expense.findMany({
      where: {
         userId: user.id
      },
      orderBy: {
         createdAt: "desc"
      }
   })
}

export async function addExpense(formData: FormData) {
   const { user } = await checkAuthenticationAndMembership();

   await prisma.expense.create({
      data: {
         description: formData.get("description") as string,
         amount: Number(formData.get("amount")),
         userId: user.id
      }
   })

   revalidatePath("/app/dashboard")
}

export async function deleteExpense(id: number) {
   await checkAuthenticationAndMembership();
   await prisma.expense.delete({
      where: {
         id
      }
   })

   revalidatePath("/app/dashboard")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
   apiVersion: "2025-01-27.acacia"
})

export async function createCheckoutSession() {
   // authentication check
   const { isAuthenticated, getUser } = getKindeServerSession();
   if (!(await isAuthenticated())) {
      return redirect("/api/auth/login");
   }

   const user = await getUser();
   const session = await stripe.checkout.sessions.create({
      customer_email: user.email!,
      client_reference_id: user.id,
      line_items: [
         {
            price: "price_1Quc4vQfQDrfKs2VazNEYICj",
            quantity: 1,
         },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/app/dashboard?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
   });

   redirect(session.url!);
}