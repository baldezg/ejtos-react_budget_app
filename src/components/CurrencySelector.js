import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);
  const currencys = {
      '$': "Dollar",
      "£" : "Pound",
      "€" : "Euro",
      "₹" : "Rupee"

  }

  const handleCurrencyChange = (event) => {
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
  };

  return (
    <div className="alert alert-secondary dropdown">
      <label htmlFor="currency" style={{ backgroundColor: 'lightgreen' }}>
      Currency: ({currency ? `${currency}  ${currencys[currency]}` : "Select Currency"})
      </label>
      <select id="currency" value={currency} onChange={handleCurrencyChange}>
        <option style={{ backgroundColor: 'lightgreen' }}value="$">Dollar</option>
        <option value="£">Pound</option>
        <option value="€">Euro</option>
        <option value="₹">Ruppee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
