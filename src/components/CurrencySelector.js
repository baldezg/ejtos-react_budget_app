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
    <div className="alert alert-secondary">
        <button className="btn dropdown-toggle" type="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        Currency: ({currency ? `${currency}  ${currencys[currency]}` : "Select Currency"})
        </button>
        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
        <li><button className="dropdown-item" type="button" value="$" onClick={handleCurrencyChange}>Dollar</button></li>
        <li><button className="dropdown-item" type="button" value="£" onClick={handleCurrencyChange}>Pound</button></li>
        <li><button className="dropdown-item" type="button" value="€" onClick={handleCurrencyChange}>Euro</button></li>
        <li><button className="dropdown-item" type="button" value="₹" onClick={handleCurrencyChange}>Rupee</button></li>
        </ul>
  </div>
  );
};

export default CurrencySelector;
