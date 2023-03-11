import './styles.scss';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {
  //setting the state in the top component App so we can pass it down to the board component as a prop
  // else we won't be able to
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  // const [theNext, setTheNext] = useState(true);

  const winner = calculateWinner(square);
  // const nextPlayer = isXNext ? 'X' : 'O';
  // const statusMessage = winner
  //   ? `The Winner is ${winner}`
  //   : `Our Next Player is ${nextPlayer}`;

  console.log('winner: ', winner);
  const handleClickOnSquare = (clickedPosition) => {
    console.log('square: ', square);

    //not allowing a click on same square twice
    // and ending the game if there's a winner
    if (square[clickedPosition] || winner) {
      return;
    }

    setSquare((currentSquares) => {
      //these returns are for new values
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
    // setTheNext((theNextOne) => !theNextOne);
  };

  return (
    <div className="app">
      <StatusMessage
        theWinner={winner}
        isXTheNext={isXNext}
        theSquare={square}
      />
      <Board squares={square} handleClickOnSquare={handleClickOnSquare} />
    </div>
  );
}

export default App;
