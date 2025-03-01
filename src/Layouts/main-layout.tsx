import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        // Need Handler to store user data
        <div>
            <Header />

            <Container className="flex-grow" >
                <main className=" flex-grow" >
                    <Outlet />
                </main>
            </Container>

            <Footer />
        </div>
    )
}