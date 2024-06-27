'use server' 
interface TransactionData{ 
    text:String ; 
    amount:Number ;
}
interface TransactionResult{ 
    data?:TransactionData,
    error?:String 
}
 async function addTransaction(formData:FormData) :Promise<TransactionResult>{
    const textValue = formData.get('text') 
    const amountValue = formData.get("amount") 
    if(!textValue||textValue==''||!amountValue)
        { 
            return {error:'Text or amt is missing'} 
        }
        const text:string = textValue.toString() 
        const amt:number= parseFloat(amountValue.toString()) 
    }
