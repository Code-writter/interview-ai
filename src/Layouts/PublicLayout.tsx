import Footer from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";

export default function PublicLayout(){
    return(
        // Need Handler to store user data
        <div>
            <AuthHandler />
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}