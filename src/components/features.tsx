import { BarChart3, PieChart, Settings } from 'lucide-react'
import React from 'react'

export default function Features() {
   return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 lg:grid-cols-3">
               <div className="space-y-2">
                  <BarChart3 className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Expense Analytics</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                     Visualize your spending patterns with detailed charts and graphs.
                  </p>
               </div>
               <div className="space-y-2">
                  <PieChart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Budget Planning</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                     Set and manage budgets to keep your expenses in check.
                  </p>
               </div>
               <div className="space-y-2">
                  <Settings className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Easy Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                     Simple and intuitive interface to manage your expenses.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}
