"use client" 
const AddTransaction = async() => {
    const clientAction=async(formData:FormData)=>{
        console.log(formData.get('text'),formData.get('amount'))
    }
    return (  
        <>
        <h3>Add Transaction</h3>
            <form action={clientAction}>
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