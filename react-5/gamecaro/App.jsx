const { useState } = React;

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

const winner = (squares) => {
  const arrWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < arrWinner.length; i++) {
    const [a, b, c] = arrWinner[i];

    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || winner(squares)) {
      return;
    }
    let newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square onClick={() => handleClick(i)} value={squares[i]} />;
  };

  const reStartGame = () => {
    setSquares(Array(9).fill(null));
  };
  const pickTurn = (type) => {
    type == "X" ? setXIsNext(true) : setXIsNext(false);
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="container">
      <div className="status">
        {winner(squares)
          ? `Winner is ${winner(squares)}`
          : `Next is ${xIsNext ? "X" : "O"} `}
      </div>
      <button className="btn" onClick={() => pickTurn("X")}>
        X đi trước
      </button>
      <button className="btn" onClick={() => pickTurn("O")}>
        O đi trước
      </button>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="btn" onClick={reStartGame}>
        Chơi Lại
      </button>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

ReactDOM.render(<Game />, app);
