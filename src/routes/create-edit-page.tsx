
import FormMockInterview from "@/components/formMockInteview"
import { db } from "@/config/firebase.config"
import { Interview } from "@/types/user.type"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function CreateEditPage(){

    const {interviewId} = useParams <{interviewId : string}> ()
    const [interview, setInterview] = useState <Interview | null> (null)

    useEffect(() => {
        const getInterview = async() => {
            if(interviewId){
                try {
                    const interviewDocs = await getDoc(doc(db, "interviews", interviewId))
                    if((interviewDocs).exists()){
                        setInterview({...interviewDocs.data()} as Interview )
                    }
                } catch (error) {
                    console.log("Error WHile featching the interview Id", error)
                }
            }
        }   
    })

    return(
        <div className=" my-4 flex-col w-full" >
            <FormMockInterview initialData={interview} />
        </div>
    )
}