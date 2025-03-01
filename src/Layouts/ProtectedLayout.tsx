import Loader from "@/routes/loader"
import { useAuth } from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"

export default function ProtectedLayout({children} : {children : React.ReactNode} ){
    
    const {isLoaded, isSignedIn} = useAuth()

    if(!isLoaded){
        return <Loader />
    }

    if(!isSignedIn){
        return <Navigate to={'/signin'} replace />
    }
        
    return children
}