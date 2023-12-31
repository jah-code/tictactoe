import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./ResultModal.scss";

const ResultModal = (props) => {
  const {
    isVisibleResultModal,
    winner,
    handleCloseResultModal,
    handlePlayAgain,
  } = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isVisibleResultModal}
      onClose={() => handleCloseResultModal()}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isVisibleResultModal}>
        <Box className="box">
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <h3>You won {winner}. Congratulations!</h3>
          </Typography>
          <Button
            className="black"
            variant="outlined"
            onClick={() => handlePlayAgain()}
          >
            Play again
          </Button>
          &nbsp;
          <Button
            className="black"
            variant="outlined"
            onClick={() => handleCloseResultModal()}
          >
            Close
          </Button>
          <br />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ResultModal;
