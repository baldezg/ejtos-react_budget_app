import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [inputBudget, setInputBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);

    const handleBudgetChange = (e) => {
        setInputBudget(e.target.value)
    }
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0)
    const handleBlur = () => {
        if(inputBudget < totalExpenses){
            alert("Budget is less than total expenses!")
        } else if(inputBudget  > 20000 ){
            alert("The budget cannot exceed the value of 20,000")
        }
        dispatch({ type: 'SET_BUDGET', payload: inputBudget})
    }
    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input
            type="number"
            name="budget"
            step="10"
            value={inputBudget}
            onChange={handleBudgetChange}
            onBlur={handleBlur}
            style={{marginLeft: "2rem", width:"50%" }} 
            ></input>
        </div>
    );
};
export default Budget;