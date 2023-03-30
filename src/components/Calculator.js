import { useState } from 'react';
import calculate from '../logic/calculate';

const entryObj = {
  total: 0,
  next: '',
  operation: '',
};

export default function Calculator() {
  const [vauleSet, setValueSet] = useState(entryObj);

  const clickHandler = (event) => {
    setValueSet(calculate(vauleSet, event.target.textContent));
  };
  const dataArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const calculatorButtons = dataArray.map((element) => <button className="button" key={element} type="button" onClick={clickHandler}>{element}</button>);
  return (
    <div className="Calculator-container">
      <div dir="rtl" className="outPut">
        {vauleSet.total}
        {vauleSet.operation}
        {vauleSet.next}
      </div>
      <ul className="buttons">
        {calculatorButtons}
      </ul>
    </div>
  );
}
