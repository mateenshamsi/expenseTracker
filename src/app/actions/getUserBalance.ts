'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from "../../../lib/db"
interface GetBalance{ 
    balance?:number , 
    error?:string 
}
async function getUserBalance():Promise<GetBalance>{
    const {userId} = auth() 
    if(!userId)
        return {error:"User Not found"}
    try{ 
       const transactions = await db.transaction.findMany({
        where:{ 
            userId:userId 
        }
        
       })
       const balance= transactions.reduce((sum,transaction)=>sum+transaction.amount,0)     
       return {balance} 
             
    }
    catch(err)
    { 
      return {error:"Error calculating balance"}  
    }
}

export default getUserBalance 