'use server' 
import { auth } from "@clerk/nextjs/server";
import { db } from "../../../lib/db";
import { Transaction } from "../../../types/Transaction";
async function getAllTransactions():Promise<{transactions?:Transaction[],error?:string}>{ 
    const {userId} = auth()
    if(!userId)
    { 
        return {error:"User not found"} 
    }
    try{ 
        const transactions = await db.transaction.findMany({
            where:{userId},orderBy:{createdAt:'desc'}
        })
        return {transactions} 

    }
    catch(err)
    { 
       return ({error:"Error finding transactions"}) 
    }
}
export default getAllTransactions