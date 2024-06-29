'use server'
import { auth } from "@clerk/nextjs/server"
import { db } from "../../../lib/db"
interface GetBalance{ 
    balance?:number , 
    error?:string 
}
async function getIncomeExpense():Promise<{income?:number,expense?:number,error?:string}>{
    const {userId} = auth() 
    if(!userId)
        return {error:"User Not found"}
    try{ 
       const transactions = await db.transaction.findMany({
        where:{ 
            userId:userId 
        }
        
       })
       const amts = transactions.map((transaction)=>(transaction.amount)) 
       const income = amts.filter((item)=>item>0).reduce((acc,item)=>acc+item) 
       const expense = amts.filter((item)=>item<0).reduce((acc,item)=>acc+item)
       return {income,expense:Math.abs(expense)}  
             
    }
    catch(err)
    { 
      return {error:"Error calculating Income And Expense"}  
    }
}

export default getIncomeExpense  