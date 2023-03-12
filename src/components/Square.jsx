import React, { useState } from 'react';

const Square = ({ value, clickOnSquare, isWinningSquare }) => {
  console.log(value);

  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      className={`square ${colorClassName} ${winningClassName}`}
      type="button"
      onClick={clickOnSquare}
    >
      {value}
    </button>
  );
};

export default Square;
