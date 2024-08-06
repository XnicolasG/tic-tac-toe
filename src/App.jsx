import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square";
import { TURNS } from "./logic/constants/board";
import { checkEndGame, checkWinner } from "./logic/Check/checkGame";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";

//1:09:25
function App() {
  const [board, setBoard] = useState(() => {
    const boarFromStorage = window.localStorage.getItem('board');
    return boarFromStorage ? JSON.parse(boarFromStorage) :  Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    //no se actualiza valor de la posición si la posición ya tiene algo
    if (board[index] || winner) return

    const newBoard = [...board];

    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveGameToStorage({newBoard, newTurn});

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Triki</h1>
      <section className="game">
        {
          board.map((square, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
