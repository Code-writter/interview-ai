import { Toaster } from "sonner"

export const TosterProvider = () => {
    return(
        <Toaster 
            theme="light"
            richColors
            position="top-right"
            className="bg-neutral-100 shadow-lg"
        />
    )
}