import Heading from "@/components/headings";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
            <div className="flex w-full items-center justify-between" > 
                {/* Heading */}
                <Heading title="Dashboard"
                    description="Create and start your AI Mock Interview tailored according to your skill"
                />
                <Link to={"/generate/create"} > <Button size={'sm'} > Add New <Plus/> </Button> </Link>
                {/* content */}
            </div>
            <Separator className=" my-8" />
        </>
    )
}