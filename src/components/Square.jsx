import React from 'react';

const Square = ({ value, children }) => {
  console.log(value);
  console.log(children);
  return (
    <button className="square" type="button">
      {value}
    </button>
  );
};

export default Square;
