import React from 'react'
import { Square } from './Square'

export const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null
    const winnerText = winner === false ? 'Drawn' : 'Winner: '
    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button
                        onClick={resetGame}
                    >Play Again</button>
                </footer>
            </div>
        </section>
    )
}
