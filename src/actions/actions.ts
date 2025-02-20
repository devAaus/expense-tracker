"use server"

import { prisma } from "@/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

const authCheck = async () => {
   // auth check
   const { isAuthenticated, getUser } = getKindeServerSession();
   if (!(await isAuthenticated())) {
      return redirect("/api/auth/login");
   }

   const user = await getUser();
   return user;
}

export async function getExpenses() {
   const user = await authCheck();
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
   const user = await authCheck();

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
   await authCheck();
   await prisma.expense.delete({
      where: {
         id
      }
   })

   revalidatePath("/app/dashboard")
}