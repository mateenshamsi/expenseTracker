import getAllTransactions from '@/app/actions/getAllTransaction';
import { Transaction } from '../types/Transaction';
import TransactionItem from './TransactionItem';
const TransactionList  = async() => {
    const {transactions,error} =await getAllTransactions()
    if(error)
    { 
      return <p className='error'>{error}</p>  
    }
    return ( 
       <>
        <h3>History</h3>
        <ul className="list">
            {transactions && transactions.map((transaction:Transaction)=>(
              <TransactionItem transaction={transaction}/>  
            ))}

        </ul>
        </>
     );
}
 
export default TransactionList ;