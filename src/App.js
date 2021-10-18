import './App.css';
import { useState } from 'react'
import Board from './Board/Board';

function App() {
  const startingUserBoard = Array.from(Array(10), _ => Array(10).fill('W'));
  const startingComputerBoard = Array.from(Array(10), _ => Array(10).fill('W'));
  const startingProbabilityBoard = [
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.8, 0.8, 0.8, 0.8, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.6, 0.5],
    [0.5, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.5],
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  ]
  
  const [userBoard, setUserBoard] = useState(startingUserBoard);
  const [computerBoard, setComputerBoard] = useState(startingComputerBoard);
  const [probabilityBoard, setProbabilityBoard] = useState(startingProbabilityBoard);
  const [isUserPlacingShips, setIsUserPlacingShips] = useState(true);

  function onDonePlacingShipsClick() {
    setIsUserPlacingShips(() => false);
  }

  function onUserCellClick(x, y) {
    if (isUserPlacingShips) {
      setUserBoard(prevBoard => {
        let newBoard = prevBoard.map(inner => inner.slice())
        newBoard[y][x] = (newBoard[y][x] === 'S' ? 'W' : 'S');
        return newBoard;
      })
    }
  }

  function onComputerCellClick(x, y) {
    //if the user made a valid move, then the computer can make the next move
    if (makeUserMove(x, y))
      makeComputerMove();
  }

  //returns if the move was made
  function makeUserMove(x, y) {
    let nextState = getNextCellState(computerBoard[y][x]);
    if (nextState == null)
      return false;

    setComputerBoard(board => {
      board[y][x] = nextState;
      return [...board];
    })
    return true;
  }
  
  function makeComputerMove() {
    let bestMove = getBestMove();
    let nextState = getNextCellState(userBoard[bestMove[0]][bestMove[1]]);

    setUserBoard(board => {
      board[bestMove[0]][bestMove[1]] = nextState;
      return [...board];
    });
  }

  function getBestMove() {
      //get the move with the highest probability
      let bestMove;
      let maxProbability = 0;
      for(let y = 0; y < probabilityBoard.length; y++) {
        for (let x = 0; x < probabilityBoard[y].length; x++) {
          if (probabilityBoard[y][x] > maxProbability) {
            maxProbability = probabilityBoard[y][x];
            bestMove = [y, x];
          }
        }
      }
      //since we don't want to make this move again, set the probability to 0
      probabilityBoard[bestMove[0]][bestMove[1]] = 0.0;
      return bestMove;
  }

  function getNextCellState(prevState) {
    switch (prevState) {
      //water -> miss
      case 'W':
        return 'M'
      //ship -> hit
      case 'S':
        return 'H';
      default:
        return null;
    }
  }

  //generates a random integer between the min (inclusive) and the max (exclusive).
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <h1 style={{marginTop: 20, marginBottom: 0}}>Battleship</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div>
          <h2 style={{textAlign: 'center', fontFamily: 'Copperplate', color: 'white'}}>You</h2>
          <Board board={userBoard} onCellClick={onUserCellClick}/>
        </div>
        {isUserPlacingShips ? 
        <div style={{textAlign: 'center', width: 35+'vw', margin: 'auto 0'}}>
          <h2>Welcome to Battleship</h2>
          <p>Your goal is to sink all of the AI's ships before it can sink yours.</p>
          <p>To start, place the following ships horizontally or verically by clicking cells on the grid:</p>
          <p>Carrier (5 spaces)</p>
          <p>Battleship (4 spaces)</p>
          <p>Cruiser (3 spaces)</p>
          <p>Submarine (3 spaces)</p>
          <p>Destroyer (2 spaces)</p>
          <button onClick={onDonePlacingShipsClick} className={'button'}>I'm done placing my ships</button>
        </div>
        :
        <div>
          <h2 style={{textAlign: 'center', fontFamily: 'Copperplate', color: 'white'}}>AI</h2>
          <Board board={computerBoard} onCellClick={onComputerCellClick}/>
        </div>
        }
      </div>
    </>
  );
}

export default App;
