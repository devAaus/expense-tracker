"use server"

import { prisma } from "@/lib/db"
import { checkAuthenticationAndMembership } from "@/lib/server-utils";
import { revalidatePath } from "next/cache"

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