import { Outlet } from "react-router-dom";

export default function AuthenticationLayout(){
    return (
        <div className=" w-screen h-screen flex justify-center items-center overflow-hidden relative" >
            <img src="/assets/img/bg.png" className=" h-full w-full absolute object-cover opacity-20" alt="" />
            <Outlet />
        </div>
    )
}