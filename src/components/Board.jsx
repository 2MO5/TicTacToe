import React, { useState } from 'react';
import Square from './Square';

const Board = ({ squares, handleClickOnSquare, winningSquares }) => {
  const renderTheSquare = (position) => {
    const isWinningSquare = winningSquares.includes(position); //if the square is a winning one.

    return (
      <Square
        value={squares[position]}
        clickOnSquare={() => handleClickOnSquare(position)}
        isWinningSquare={isWinningSquare}
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
