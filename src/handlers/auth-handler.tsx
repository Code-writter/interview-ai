import { useAuth, useUser } from "@clerk/clerk-react"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from '../config/firebase.config'
import { User } from "@/types/user.type"

import Loader from "@/routes/loader"



export default function AuthHandler(){

    const {isSignedIn} = useAuth()
    const {user} = useUser()

    const pathname = useLocation().pathname
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storeUserData = async() => {
            if(isSignedIn && user){
                setLoading(true)
                try {
                    const userInstance = await getDoc(doc(db, "users", user.id))
                    console.log("Inside Try-catch")
                    if(!userInstance.exists()){
                        const userData : User = {
                            id : user.id,
                            name : user.fullName || user.firstName || "Anonymous",
                            email : user.primaryEmailAddress?.emailAddress || "N/A",
                            imageUrl : user.imageUrl,
                            createdAt : serverTimestamp(),
                            updatedAt : serverTimestamp()
                        }

                        await setDoc(doc(db, "users", user.id), userData)

                    
                    }
                    console.log(userInstance)
                } catch (error) {
                    console.log("Error while storing the user data", error)
                }
                finally{
                    setLoading(false)
                }
            }
        }

        storeUserData()
    }, [isSignedIn, user, pathname, navigate])

    if(loading){
        return <Loader />
    }

    return null
}
