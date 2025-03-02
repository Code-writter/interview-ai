"use client"

import { Interview } from "@/types/user.type"
import CustomBreadCrum from "./custom-bread-crum"


import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"
import { toast } from "sonner"
import Heading from "./headings"
import { Button } from "./ui/button"
import { LucideLoader2, Trash2 } from "lucide-react"
import { Separator } from "./ui/separator"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    position : z.string().min(1, "Position is required").max(100, "Position must be 100 character or less"),
    description : z.string().min(10, "Description is required"),
    experience : z.coerce.number().min(0, "Experience cannot be empty or negetive"),
    techStack : z.string().min(1, "Tech stack must be at least a character")
})


interface FormMockInterviewProps{
    initialData : Interview | null
}

type FormData = z.infer<typeof formSchema >

export default function FormMockInterview({initialData} : FormMockInterviewProps){

    const form = useForm<FormData>({
        resolver : zodResolver(formSchema),
        defaultValues : initialData ? { ...initialData, experience: Number(initialData.experience) } : {}
    })

    const { isValid, isSubmitting } = form.formState
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const {userId} = useAuth()

    const title = initialData?.position ? initialData?.position : "Create a new mock Interview"

    const breadCrumpPage =  initialData?.position ? initialData?.position : "Create"

    const actions = initialData? "Save Changes" : "Create"
    const toastMessage = initialData ? {title : "Updated...!", description : "Change saved successfully" }
    : {title : "Created...!", description : "New Mock Interview created"}

    const onSubmit = async (data : FormData) => {
        try {
            setLoading(true)
        } catch (error) {
            console.log(error)
            toast.error("Error...", {
                description : "Something went wrong, try again later"
            })
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(initialData){
            form.reset({
                position : initialData.position,
                description : initialData.description,
                experience : Number(initialData.experience),
                techStack : initialData.techStack
            })
        }
    }, [initialData])

    return(
        <div className=" w-full flex-col space-y-4" >
                <CustomBreadCrum 
                    breadCrumPage={breadCrumpPage}
                    breadCrumIteams={[{label : "Mock Interviews", link : '/generate'}]}
                />

                <div className="mt-4 flex items-center justify-between w-full" >
                    <Heading title={title} isSubHeading />

                    {initialData && (
                        <Button variant={'ghost'} >
                            <Trash2 className="min-h-4 min-w-4 text-red-500" />
                        </Button>
                    )}
                </div>

            <Separator className=" my-4" />
            <div className="my-6" ></div>
            <FormProvider {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} 
                    className="w-full p-8 rounded-lg flex flex-col items-start justify-start gap-6 shadow-md"
                >
                    <FormField 
                        control={form.control}
                        name="position"
                        render={({field}) => (
                            <FormItem className="w-full space-y4" >
                                <div className=" w-full flex items-center justify-between" >
                                    <FormLabel>
                                        Job Role / Job position 
                                    </FormLabel>
                                    <FormMessage className="text-sm" />
                                </div>

                                <FormControl>
                                    <Input disabled={loading}
                                     placeholder="eg:- Fill Stack Developer"
                                     className="h-12"
                                     {...field}
                                     />
                                    
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField 
                        control={form.control}
                        name="description"
                        render={({field}) => (
                            <FormItem className="w-full space-y4" >
                                <div className=" w-full flex items-center justify-between" >
                                    <FormLabel>
                                        Job Role / Job position 
                                    </FormLabel>
                                    <FormMessage className="text-sm" />
                                </div>

                                <FormControl>
                                    <Textarea disabled={loading}
                                     placeholder="Describe your job role and position"
                                     className="h-12"
                                     {...field}
                                     />
                                    
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Experience */}
                    <FormField 
                        control={form.control}
                        name="experience"
                        render={({field}) => (
                            <FormItem className="w-full space-y4" >
                                <div className=" w-full flex items-center justify-between" >
                                    <FormLabel>
                                        Years of experience
                                    </FormLabel>
                                    <FormMessage className="text-sm" />
                                </div>

                                <FormControl>
                                    <Input type="number" disabled={loading}
                                     placeholder="eg:- 5 years"
                                     className="h-12"
                                     {...field}
                                     />
                                    
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Tech stack */}

                    <FormField 
                        control={form.control}
                        name="techStack"
                        render={({field}) => (
                            <FormItem className="w-full space-y4" >
                                <div className=" w-full flex items-center justify-between" >
                                    <FormLabel>
                                        Tech Stack
                                    </FormLabel>
                                    <FormMessage className="text-sm" />
                                </div>

                                <FormControl>
                                    <Textarea disabled={loading}
                                     placeholder="Describe your job role and position"
                                     className="h-12"
                                     value={field.value || ""}
                                     {...field}
                                     />
                                    
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className=" w-full flex items-center justify-end gap-6" >
                        <Button type="reset"
                            size={"sm"}
                            variant={"outline"}
                            disabled={isSubmitting || loading}
                        >
                            Reset
                        </Button>

                        <Button type="reset"
                            size={"sm"}
                            variant={"outline"}
                            disabled={isSubmitting || loading || !isValid}
                        >
                            {loading ? (<LucideLoader2 className="  animate-spin" />) : (
                                actions
                            )}
                        </Button>
                    </div>
                </form>
            </FormProvider>

        </div>
    )
}