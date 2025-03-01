import { cn } from "@/lib/utils";
import Container from "./container";
import LogoContainer from "./logo-container";
import NavigationRoutes from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile-container";
import ToggelContainer from "./toggel-container";

export default function Header(){
    const {userId} = useAuth()
    
    return(
        <header className={cn('w-full border-b duration-150 transition-all ease-in-out')} >
            <Container>
                <div className=" flex items-center gap-4 w-full" >
                    {/* logo */}
                        <LogoContainer />
                    {/* Navigation */}
                        <nav className="hidden md:flex items-center gap-3" >
                            <NavigationRoutes />
                            {userId && (
                                <NavLink 
                                to={'/generate'}
                                className={({isActive}) => cn("text-base text-neutral-600", 
                                    isActive && "text-black font-semibold")} >
                                    Take an Interview
                                </NavLink>
                            )}
                        </nav>
                    {/* Profile */}
                    <div className="ml-auto flex items-center gap-6" >
                            <ProfileContainer /> 
                            {/* Hamburger */}
                            <ToggelContainer />
                    </div>
                </div>
            </Container>
        </header>
    )
}