"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"

import React from 'react'
import { Button } from './ui/button'
import { Pencil } from 'lucide-react'

import { ExpenseProps, } from '@/lib/type'
import { deleteExpense } from '@/actions/actions'

export default function ExpenseCard(
   { expense }: ExpenseProps
) {
   return (
      <div className="flex items-center border p-4 rounded-lg bg-white">
         <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{expense.description}</p>
            <p className="text-sm text-muted-foreground">{new Date(expense.createdAt).toLocaleDateString()}</p>
         </div>
         <div className="ml-auto flex items-center space-x-4">
            <div className=" font-medium">${expense.amount.toFixed(2)}</div>
            <Button variant={'secondary'}>
               <Pencil />
            </Button>
            <Button
               onClick={async () => {
                  await deleteExpense(expense.id)
               }}
               variant={'destructive'}
            >
               X
            </Button>
         </div>
      </div>
   )
}
