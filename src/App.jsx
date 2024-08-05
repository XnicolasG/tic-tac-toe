import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children,isSelected, updateBoard, index }) => {
  return (
    <div className={`square ${isSelected ? 'is-selected' : ''}`}>
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = () => {
    
  }

  return (
    <main className="board">
      <h1>Triki</h1>
      <section className="game">
        {
          board.map((_, index) => (
            <Square 
            key={index} 
            index={index}
            updateBoard={updateBoard}
            >
              
            </Square>
          ))
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
