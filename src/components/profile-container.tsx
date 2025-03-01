import { useAuth, UserButton } from "@clerk/clerk-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { Loader2 } from "lucide-react"

export default function ProfileContainer(){
    
    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded){
        return(
            <div className=" flex items-center" >
                <Loader2 className="min-w-4 min-h-4 animate-spin" />
            </div>
        )
    }
    
    return (
        <div>
            {
                isSignedIn? (<UserButton afterSignOutUrl="/" />) :
                (<Link to={'/signin'} ><Button size={'sm'} >Get Started</Button></Link>)
            }
        </div>
    )
}