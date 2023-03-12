import './styles.scss';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import { useState } from 'react';
import { calculateWinner } from './winner';
import History from './components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingboard = history[currentMove];

  //setting the state in the top component App so we can pass it down to the board component as a prop
  // else we won't be able to
  // const [square, setSquare] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  // const [theNext, setTheNext] = useState(true);

  const { winner, winningSquares } = calculateWinner(gamingboard.squares);
  // const nextPlayer = isXNext ? 'X' : 'O';
  // const statusMessage = winner
  //   ? `The Winner is ${winner}`
  //   : `Our Next Player is ${nextPlayer}`;

  console.log('winner: ', winner);
  console.log({ history, currentMove });
  const handleClickOnSquare = (clickedPosition) => {
    console.log('square: ', gamingboard.squares);

    //not allowing a click on same square twice
    // and ending the game if there's a winner
    if (gamingboard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      //the base array
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext
      });
    });
    // setSquare((currentSquares) => {
    //   //these returns are for new values
    //   return currentSquares.map((squareValue, position) => {
    //     if (clickedPosition === position) {
    //       return isXNext ? 'X' : 'O';
    //     }

    //     return squareValue;
    //   });
    // });
    //increasing the move count by 1 each time there's a click
    setCurrentMove((move) => move + 1);
    // setIsXNext((currentIsXNext) => !currentIsXNext);
    // setTheNext((theNextOne) => !theNextOne);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const reset = () => {
    setCurrentMove(0);
    setHistory(NEW_GAME);
  };
  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">TaC</span> ToE!
      </h1>
      <StatusMessage
        theWinner={winner}
        // isXTheNext={isXNext}
        // theSquare={square}
        gamingBoard={gamingboard}
      />
      <Board
        squares={gamingboard.squares}
        handleClickOnSquare={handleClickOnSquare}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={() => reset()}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Go for another Round
      </button>

      <h2 style={{ fontWeight: 'normal' }}>Our Game History until now</h2>
      {/* passing down history state as a prop and also the function moveTo*/}
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
