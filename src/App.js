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
  
  const isGameStarted = true;
  const isUsersTurn = true;

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
    console.log("Computer: " + x + " " + y);
    setComputerBoard(prevBoard => {
      let newBoard = prevBoard.map(inner => inner.slice())
      newBoard[y][x] = 'M';
      return newBoard;
    })
  }

  function onDonePlacingShipsClick() {
    setIsUserPlacingShips(() => {return false});
  }

  return (
    <>
      <h1 style={{fontSize: 54, fontFamily: 'Copperplate', color: 'white', textAlign: 'center', marginTop: 20, marginBottom: 0}}>Battleship</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div>
          <h2 style={{textAlign: 'center', fontFamily: 'Copperplate', color: 'white'}}>You</h2>
          <Board board={userBoard} onCellClick={onUserCellClick}/>
        </div>
        {isUserPlacingShips ? 
        <div style={{textAlign: 'center'}}>
          <h2 style={{fontFamily: 'Copperplate', color: 'white', marginTop: 180}}>Place your ships</h2>
          <button onClick={onDonePlacingShipsClick} style={{fontSize: 24, fontFamily: 'Copperplate', backgroundColor: 'white', color: 'dodgerblue', border: 'none', borderRadius: 6, padding: 10}}>I'm done placing my ships</button>
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
