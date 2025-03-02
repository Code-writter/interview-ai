import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Home, Key } from "lucide-react";
import React from "react";
  

interface CustomBreadCrumProps{
    breadCrumPage : string;
    breadCrumIteams : {link : string , label : string}[];
}

export default function CustomBreadCrum({breadCrumPage, breadCrumIteams}:CustomBreadCrumProps){
    return(
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/"
                    className=" flex items-center justify-center hover:text-emerald-500"
                    >
                        <Home className="h-3 w-3 mr-2" />
                    Home
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    breadCrumIteams.map((iteam, i) => (
                        <React.Fragment key={i}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components"
                                 className="hover:text-emerald-500"
                                >{iteam.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))
                }


                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{breadCrumPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

    )
}