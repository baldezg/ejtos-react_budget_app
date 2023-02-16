import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const 
    return (
        <div className='alert alert-secondary'>
            <label>Budget: £</label>
            <input
            type="number"
            name="budget"
            step="10"
            min="0"
            max="20000"
            ></input>
        </div>
    );
};
export default Budget;