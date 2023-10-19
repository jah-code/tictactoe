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

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Board = () => {
  const [filledCount, setFilledCount] = useState(0);
  const [combinationX, setCombinationX] = useState([]);
  const [combinationO, setCombinationO] = useState([]);
  const [reset, setReset] = useState(false);
  const [isVisibleResultModal, setIsVisibleResultModal] = useState(false);
  const [isVisibleNoWinnerModal, setIsVisibleNoWinnerModal] = useState(false);
  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState(null);

  const playerHandler = (id, currentPlayer) => {
    setFilledCount(filledCount + 1);
    if (currentPlayer === 1) {
      setCombinationX([...combinationX, id]);
      setPlayer(currentPlayer);
    } else {
      setCombinationO([...combinationO, id]);
      setPlayer(currentPlayer);
    }

    setReset(false);
  };

  useEffect(() => {
    if (winner === "" && filledCount === 9) {
      setIsVisibleNoWinnerModal(true);
    }
  }, [filledCount, winner]);

  useEffect(() => {
    if (
      (combinationX && combinationX.length >= 3) ||
      (combinationO && combinationO.length >= 3)
    ) {
      winnerCombinations.map((winCombi) => {
        const winnerCombi = winCombi.every((value) => {
          if (player === 1) {
            return combinationX.includes(value);
          } else {
            return combinationO.includes(value);
          }
        });

        if (winnerCombi) {
          if (player === 1) {
            setWinner("X");
          } else {
            setWinner("O");
          }
          setIsVisibleResultModal(true);
        }
      });
    }
  }, [combinationX, combinationO, player]);

  const handleReset = () => {
    setReset(true);
    setFilledCount(0);
    setCombinationO([]);
    setCombinationX([]);
    setWinner("");
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
        {items.map((item) => {
          return (
            <Square
              key={item}
              id={+item}
              filledCount={filledCount}
              playerHandler={playerHandler}
              reset={reset}
            />
          );
        })}
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
