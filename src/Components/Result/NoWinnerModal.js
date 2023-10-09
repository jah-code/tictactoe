import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./ResultModal.scss";

const NoWinnerModal = (props) => {
  const { isVisibleNoWinnerModal, handleCloseNoWinnerModal, handlePlayAgain } =
    props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isVisibleNoWinnerModal}
      onClose={() => handleCloseNoWinnerModal()}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isVisibleNoWinnerModal}>
        <Box className="box">
          <Typography id="transition-modal-title" variant="h6" component="h2">
            <h3>There is no winner</h3>
          </Typography>
          <Button
            className="black"
            variant="outlined"
            onClick={() => handlePlayAgain()}
          >
            Rematch
          </Button>
          &nbsp;
          <Button
            className="black"
            variant="outlined"
            onClick={() => handleCloseNoWinnerModal()}
          >
            Close
          </Button>
          <br />
        </Box>
      </Fade>
    </Modal>
  );
};

export default NoWinnerModal;
