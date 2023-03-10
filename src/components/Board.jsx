import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClickOnSquare = (clickedPosition) => {
    console.log('square: ', squares);
    setSquares((currentSquares) => {
      //these returns are for new values
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return 'X';
        }

        return squareValue;
      });
    });
  };

  const renderTheSquare = (position) => {
    return (
      <Square
        value={squares[position]}
        clickOnSquare={() => handleClickOnSquare(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderTheSquare(0)}
        {renderTheSquare(1)}
        {renderTheSquare(2)}
      </div>
      <div className="board-row">
        {renderTheSquare(3)}
        {renderTheSquare(4)}
        {renderTheSquare(5)}
      </div>
      <div className="board-row">
        {renderTheSquare(6)}
        {renderTheSquare(7)}
        {renderTheSquare(8)}
      </div>
    </div>
  );
};

export default Board;
