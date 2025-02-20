"use client"

import React from 'react'
import { Button } from './ui/button'
import { DollarSign } from 'lucide-react'
import { createCheckoutSession } from '@/actions/actions'

export default function PurchaseButton() {
   return (
      <>
         <Button
            onClick={async () => {
               await createCheckoutSession()
            }}
         >
            <DollarSign className="h-4 w-4" /> Pay
         </Button>
         <span className='text-xs'>(Get lifetime access for $99)</span>
      </>
   )
}
