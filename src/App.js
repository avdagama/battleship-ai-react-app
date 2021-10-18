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
      console.log("User: " + x + " " + y);
      setUserBoard(prevBoard => {
        let newBoard = prevBoard.map(inner => inner.slice())
        newBoard[y][x] = 'S';
        return newBoard;
      })
    }
  }

  function onComputerCellClick(x, y) {
    makeUserMove(x, y);
    makeComputerMove();
  }

  function makeUserMove(x, y) {
    setComputerBoard(prevBoard => {
      let newBoard = prevBoard.map(inner => inner.slice())
      newBoard[y][x] = 'M';
      return newBoard;
    })
  }

  function makeComputerMove() {
    let x = getRandomNumber(0, 10);
    let y = getRandomNumber(0, 10);

    setUserBoard(prevBoard => {
      let newBoard = prevBoard.map(inner => inner.slice())
      newBoard[y][x] = 'M';
      return newBoard;
    })
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
          <p>
            Your goal is to sink all of the AI's ships before they can sink yours.
          </p>
          <p>
            To start, place the following ships horizontally or verically:
          </p>
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
