import { MainRoutes } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router-dom"


interface NavigationProps{
    isMobile ?: boolean
}

export default function NavigationRoutes( {isMobile = false} : NavigationProps){

    

    return(
        <ul className={cn('flex items-center gap-6', isMobile && "items-start flex-col gap-8")} >
            {MainRoutes.map((route) => (
                <NavLink 
                key={route.href} 
                to={route.href} 
                className={({isActive}) => cn("text-base text-neutral-600", 
                    isActive && "text-black font-semibold")} >
                        {route.label}
                </NavLink>
            ))}
        </ul>
    )
}