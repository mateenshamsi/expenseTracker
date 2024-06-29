import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addComments } from "../lib/utils";


const IncomeExpense = async() => {
    const {income,expense} = await getIncomeExpense()
    return (  
        <div className="inc-exp-container">
              <div className="">
                <h4>Income</h4>
                <p className="money plus">${income}</p> 
                   
            </div>  
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    );
}
 
export default IncomeExpense;