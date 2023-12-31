import Board from "../Components/Tictactoe/Board";
import "./Tictactoe.scss";

const Tictactoe = () => {
  return (
    <div className="body-content">
      <h2 className="title">Tic Tac Toe</h2>
      <Board />
    </div>
  );
};

export default Tictactoe;
