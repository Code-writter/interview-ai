import { Outlet } from "react-router-dom";

export default function Generate(){
    return(
        <div className=" h-screen flex-col md:px-12" >
            <Outlet />
        </div>
    )
}