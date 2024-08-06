export const Square = ({ children, isSelected, updateBoard, index }) => {
    const hanldeClick = () => {
      updateBoard(index)
    }
    return (
      <div
        onClick={hanldeClick}
        className={`square ${isSelected ? 'is-selected' : ''}`}>
        {children}
      </div>
    )
  }