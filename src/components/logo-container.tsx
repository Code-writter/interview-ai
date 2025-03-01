import { Link } from "react-router-dom";

export default function LogoContainer(){
    return(
        <Link to={'/'} >
            <img src="/assets/svg/logo.svg" className="min-w-10 min-h-10 object-contain" alt="" />
        </Link>
    )
}