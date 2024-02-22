import React, { useState } from 'react';

const App = () => {
  const initialBill = 0;
  const initialTip = 0;
  const initialNumberOfPeople = 1;tfg

  const [bill, setBill] = useState(initialBill);
  const [tip, setTip] = useState(initialTip);
  const [numberOfPeople, setNumberOfPeople] = useState(initialNumberOfPeople);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const BillChange = (event) => {
    setBill(parseFloat(event.target.value));
  };

  const TipChange = (event) => {
    setTip(parseFloat(event.target.value));
  };

  const Change = (event) => {
    setNumberOfPeople(parseInt(event.target.value, 10));
  };

  const calculate = () => {
    const tipPercentage = tip / 100;
    const calculatedTip = bill * tipPercentage;
    const totalAmountWithTip = bill + calculatedTip;
    const tipPerPerson = calculatedTip / numberOfPeople;
    const totalPerPerson = totalAmountWithTip / numberOfPeople;

    setTipAmount(tipPerPerson);
    setTotalAmount(totalPerPerson);
  };

  const reset = () => {
    setBill(initialBill);
    setTip(initialTip);
    setNumberOfPeople(initialNumberOfPeople);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='left-section'>
          <label htmlFor='billinput'>Bill</label>
          <input type="number" id="billInput" value={bill} onChange={BillChange} />
          <div className='options'>
            <div className='tip-options'>
              <label>Select Tip</label>
              <div className='tip-percentages'>
                {[5, 10, 15, 25, 50].map((tipPercentage) => (
                  <button key={tipPercentage} onClick={() => TipChange({ target: { value: tipPercentage } })}>{`${tipPercentage}%`}</button>
                ))}
              </div>
            </div>
          </div>
          <div className='people-options'>
            <label htmlFor="numberOfPeople">Number of People</label>
            <input type="number" id="numberOfPeople" value={numberOfPeople} onChange={Change} />
          </div>
          <div className="buttons-row">
            <button onClick={calculate}>Calculate</button>
          </div>
        </div>
        <div className="right-section">
          <h2>Tip Amount : ${tipAmount.toFixed(2)}</h2>
          <h2>Total : ${totalAmount.toFixed(2)}</h2>
          <div className="reset-button">
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
