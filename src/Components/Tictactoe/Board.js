import { useEffect, useState } from "react";
import Square from "./Square";
import "./Board.scss";
import ResultModal from "../Result/ResultModal";
import { Button } from "@mui/material";
import NoWinnerModal from "../Result/NoWinnerModal";

const winnerCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const Board = () => {
  const [filledCount, setFilledCount] = useState(0);
  const [combinationX, setCombinationX] = useState([]);
  const [combinationO, setCombinationO] = useState([]);
  const [reset, setReset] = useState(false);
  const [isVisibleResultModal, setIsVisibleResultModal] = useState(false);
  const [isVisibleNoWinnerModal, setIsVisibleNoWinnerModal] = useState(false);
  const [winner, setWinner] = useState("");

  const playerHandler = (id, currentPlayer) => {
    setFilledCount(filledCount + 1);
    if (currentPlayer === 1) {
      setCombinationX([...combinationX, id]);
    } else {
      setCombinationO([...combinationO, id]);
    }

    setReset(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (winner === "" && filledCount === 9) {
        setIsVisibleNoWinnerModal(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [filledCount, winner]);

  useEffect(() => {
    if (combinationX && combinationX.length >= 3) {
      winnerCombinations.map((winCombi) => {
        const winnerCombi = winCombi.every((value) => {
          return combinationX.includes(value);
        });

        if (winnerCombi) {
          setWinner("X");
          setIsVisibleResultModal(true);
        }
      });
    }
  }, [combinationX]);

  useEffect(() => {
    if (combinationO && combinationO.length >= 3) {
      winnerCombinations.map((winCombi) => {
        const winnerCombi = winCombi.every((value) => {
          return combinationO.includes(value);
        });

        if (winnerCombi) {
          setWinner("O");
          setIsVisibleResultModal(true);
        }
      });
    }
  }, [combinationO]);

  const handleReset = async () => {
    await setReset(true);
    await setFilledCount(0);
    await setCombinationO([]);
    await setCombinationX([]);
    await setWinner("");
    await setReset(false);
  };

  const handleCloseResultModal = () => {
    setIsVisibleResultModal(false);
  };

  const handleCloseNoWinnerModal = () => {
    setIsVisibleNoWinnerModal(false);
  };

  const handlePlayAgain = () => {
    setIsVisibleResultModal(false);
    setIsVisibleNoWinnerModal(false);
    setReset(true);
    setWinner("");
    setFilledCount(0);
    setCombinationO([]);
    setCombinationX([]);
  };

  return (
    <div>
      <div className="board">
        <Square
          id={1}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={2}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={3}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={4}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={5}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={6}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={7}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={8}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
        <Square
          id={9}
          filledCount={filledCount}
          playerHandler={playerHandler}
          reset={reset}
        />
      </div>

      <br />
      <Button className="base" variant="outlined" onClick={handleReset}>
        Reset
      </Button>
      <ResultModal
        isVisibleResultModal={isVisibleResultModal}
        winner={winner}
        handleCloseResultModal={handleCloseResultModal}
        handlePlayAgain={handlePlayAgain}
      />
      <NoWinnerModal
        isVisibleNoWinnerModal={isVisibleNoWinnerModal}
        handleCloseNoWinnerModal={handleCloseNoWinnerModal}
        handlePlayAgain={handlePlayAgain}
      />
    </div>
  );
};

export default Board;
