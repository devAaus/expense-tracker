import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function AccountDetails({ user }: { user: any }) {
   return (
      <Card className="col-span-3">
         <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription></CardDescription>
         </CardHeader>
         <CardContent>
            <div>
               <Avatar className="h-20 w-20">
                  <AvatarImage src={user.picture} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <h1 className="text-2xl font-semibold">{user.given_name}</h1>
               <p>{user.email}</p>
            </div>
         </CardContent>
      </Card>
   )
}
