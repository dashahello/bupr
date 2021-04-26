import { Button } from '@material-ui/core';

export default function StartButton({ handleButtonClick }) {
  return (
    <Button
      style={{ marginTop: 8 }}
      onClick={handleButtonClick}
      variant="contained"
      color="primary"
    >
      START THE GAME
    </Button>
  );
}
