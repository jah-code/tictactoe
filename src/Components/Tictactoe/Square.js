import { useState, useEffect } from "react";
import "./Square.scss";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Square = (props) => {
  const { id, filledCount, playerHandler, reset } = props;
  const [currentPlayer, setCurrentPlayer] = useState();

  const handlePickCell = (filledCount) => {
    if (filledCount % 2 === 0 && !currentPlayer) {
      setCurrentPlayer(1);
    } else if (filledCount % 2 === 1 && !currentPlayer) {
      setCurrentPlayer(2);
    }
  };

  useEffect(() => {
    if (currentPlayer) {
      playerHandler(id, currentPlayer);
    }
  }, [currentPlayer]);

  useEffect(() => {
    if (reset) {
      setCurrentPlayer(null);
    }
  }, [reset]);

  return (
    <div className="cell" onClick={() => handlePickCell(filledCount)}>
      {currentPlayer === 1 ? (
        <CloseIcon fontSize="large" />
      ) : currentPlayer === 2 ? (
        <RadioButtonUncheckedIcon fontSize="large" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
