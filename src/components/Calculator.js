import CalculatorUI from './CalculatorUI';

export default function Calculator() {
  const dataArray = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  const calculatorButtons = dataArray.map((element) => <li className="button" key={element}>{element}</li>);
  return (
    <div className="Calculator-container">
      <CalculatorUI />
      <ul className="buttons">
        {calculatorButtons}
      </ul>
    </div>
  );
}
