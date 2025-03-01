import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import NavigationRoutes from "./navigation-routes"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react"
  

export default function ToggelContainer(){
    const {userId} = useAuth()
    return (
        <Sheet>
            <SheetTrigger className=" block md:hidden" > <Menu /> </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle />
                    <nav className=" flex flex-col items-start gap-6 " >
                    <NavigationRoutes  isMobile />
                            {userId && (
                                <NavLink 
                                to={'/generate'}
                                className={({isActive}) => cn("text-base text-neutral-600", 
                                    isActive && "text-black font-semibold")} >
                                    Take an Interview
                                </NavLink>
                            )}
                    </nav>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}