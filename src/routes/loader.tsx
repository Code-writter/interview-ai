import { cn } from "@/lib/utils"
import { LoaderCircle } from "lucide-react"

export default function Loader( {className} : {className ?: string} ){

    return(
        <div className={cn(
            `w-screen h-screen flex items-center justify-between bg-transparent z-50`, className
        )} >
            <LoaderCircle className=" w-6 h-6 min-w-6 min-h-6 animate-spin" />
        </div>
    )
}