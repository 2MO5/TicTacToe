import React from 'react';

const StatusMessage = ({ theWinner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every((squareValue) => squareValue != null); //check for all the values whether they are not null. Or they are filled!

  const nextPlayer = isXNext ? 'X' : 'O';
  // const statusMessage = theWinner
  //   ? `The Winner is ${theWinner}`
  //   : `Our Next Player is ${nextPlayer}`;

  const renderTheStatusMessage = (statusMessage) => {
    if (theWinner) {
      return (
        <>
          The winner is{' '}
          <span className={theWinner ? 'text-green' : 'text-orange'}>
            {theWinner}
          </span>
          !
        </>
      );
    }

    if (!theWinner && noMovesLeft) {
      return (
        <>
          <span className="text-orange">O </span> and
          <span className="text-green"> X </span>Tied!
        </>
      );
    }
    if (!theWinner && !noMovesLeft) {
      return (
        <>
          Next is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>{' '}
        </>
      );
    }

    return null;
  };
  return (
    <h2 className="status-message">
      {/* {theWinner && <div> The winner is ${theWinner}</div>}
    {!theWinner && noMovesLeft  && <div> No one got to the end!</div>}
    {!theWinner && !noMovesLeft  && <div> No one got to the end!</div>} */}

      {renderTheStatusMessage()}
    </h2>
  );
};

export default StatusMessage;
