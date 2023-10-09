import { useEffect, useState } from "react";
import Square from "./Square";
import "./Board.scss";
import ResultModal from "../Result/ResultModal";

const Board = () => {
  const [filledCount, setFilledCount] = useState(0);
  const [combinationX, setCombinationX] = useState([]);
  const [combinationO, setCombinationO] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const playerHandler = (id, currentPlayer) => {
    setFilledCount(filledCount + 1);
    if (currentPlayer === 1) {
      setCombinationX([...combinationX, id]);
    } else {
      setCombinationO([...combinationO, id]);
    }
  };

  useEffect(() => {
    console.log("filled count", filledCount);
    if (filledCount === 9) {
      setIsVisibleModal(true);
    }
  }, [filledCount]);

  return (
    <div className="board">
      <Square id={1} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={2} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={3} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={4} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={5} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={6} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={7} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={8} filledCount={filledCount} playerHandler={playerHandler} />
      <Square id={9} filledCount={filledCount} playerHandler={playerHandler} />

      <ResultModal isVisibleModal={isVisibleModal} />
    </div>
  );
};

export default Board;
