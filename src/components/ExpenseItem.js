
import React, { useContext } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillMinusCircle } from 'react-icons/ai'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDecreaseExpense = () => {
        dispatch({
          type: 'DECREASE_EXPENSE',
          payload: {
            id: props.id,
            amount: 10,
          },
        });
      };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><AiFillPlusCircle color="lightgreen" size={40} onClick={event=> increaseAllocation(props.name)}>+</AiFillPlusCircle></td>
        <td><AiFillMinusCircle color="red" size={40} onClick={handleDecreaseExpense}></AiFillMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;