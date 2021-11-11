// Create a NumbersTable component that displays a list of numbers between 1 and a limit. Even numbers must be red.

// It takes 1 prop:

// limit: A number.
// Example

// <NumbersTable limit={12} />

import './NumbersTable.css';

function NumbersTable(props) {
  let numbersArr = new Array(props.limit)
    .fill(0)
    .map((currentNumber, i) => i + 1);

  return numbersArr.map((currentNumber) => {
    if (currentNumber % 2 === 0) {
      return <span className="even number">{currentNumber}</span>;
    } else {
      return <span className="number">{currentNumber}</span>;
    }
  });
}

export default NumbersTable;
