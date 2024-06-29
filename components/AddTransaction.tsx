"use client"
import { addTransaction } from "@/app/actions/addTransaction"
import { currentUser} from "@clerk/nextjs/server"
import { useRef } from "react"
import { toast } from "react-toastify"


const AddTransaction = () => {
    const formRef=  useRef<HTMLFormElement>(null)  
    const clientAction=async(formData:FormData)=>{
        const result = await addTransaction(formData) 
        if(result.error)
        { 
           toast.error(result.error)  
        }    

        else
        { 
            toast.success("Added transaction details")
            formRef.current?.reset() 
         }
    }
    return (  
        <>
        <h3>Add Transaction</h3>
            <form ref={formRef} action={clientAction}>
                <div className="form-control">
                <label htmlFor="text">Text<br/> 
                </label>
                    <input type="text" placeholder="Enter Text ...." name="text" id="text" />
                    
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>(negative - expense ,positive - income) 
                    </label>
                   <input type="number" name="amount" id="amount" placeholder="Enter amount ..." step="0.01" />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </>
    );
}
 
export default AddTransaction;