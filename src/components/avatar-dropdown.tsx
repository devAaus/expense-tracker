import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProps } from "@/lib/type";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LayoutDashboard, LogOut, User } from "lucide-react";
import Link from "next/link";

const dropLinks = [
   {
      label: "Dashboard",
      href: "/app/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
   },
   {
      label: "Profile",
      href: "/app/profile",
      icon: <User className="h-4 w-4" />,
   }
]

export default function AvatarDropdown({ user }: UserProps) {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="focus:outline-none focus:ring-[2px] focus:ring-offset-2 focus:ring-primary rounded-full">
            <Avatar>
               <AvatarImage src={user.picture} alt="@shadcn" />
               <AvatarFallback>AB</AvatarFallback>
            </Avatar>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {dropLinks.map((links) => (
               <Link href={links.href} key={links.label}>
                  <DropdownMenuItem>
                     {links.icon}
                     <span>{links.label}</span>
                  </DropdownMenuItem>
               </Link>
            ))}
            <DropdownMenuItem className="text-destructive" asChild>
               <LogoutLink>
                  <LogOut className="h-4 w-4" /> Logout
               </LogoutLink>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
