import React, { useState } from 'react';

const Square = ({ value, clickOnSquare }) => {
  console.log(value);

  const [counter, setCounter] = useState(0);

  return (
    <button className="square" type="button" onClick={clickOnSquare}>
      {value}
    </button>
  );
};

export default Square;
