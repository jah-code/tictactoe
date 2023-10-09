import { useState, useEffect } from "react";
import "./Square.scss";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Square = (props) => {
  const { id, filledCount, playerHandler } = props;
  const [currentPlayer, setCurrentPlayer] = useState();

  const handlePickCell = (id, filledCount) => {
    if (filledCount % 2 === 0) {
      setCurrentPlayer(1);
    } else {
      setCurrentPlayer(2);
    }
  };

  useEffect(() => {
    if (currentPlayer) {
      playerHandler(id, currentPlayer);
    }
  }, [currentPlayer]);

  return (
    <div className="cell" onClick={(e) => handlePickCell(id, filledCount)}>
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
