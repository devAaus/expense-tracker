import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

export default function AccountDetails() {
   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription></CardDescription>
         </CardHeader>
         <CardContent>
            <form className="space-y-4">
               <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={"John Doe"}
                  />
               </div>
               <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                     type="email"
                     name="email"
                     placeholder="Email"
                     value="john@example.com"
                  />
               </div>
               <Button type="submit" className="w-full mt-4">
                  Update
               </Button>
            </form>
         </CardContent>
      </Card>
   )
}
