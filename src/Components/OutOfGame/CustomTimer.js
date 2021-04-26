import { TextField } from '@material-ui/core';

export default function CustomTimer({ setTimerInput, timerInput }) {
  return (
    <TextField
      type="number"
      label="Timer (seconds)"
      variant="outlined"
      onChange={(evt) => {
        const input = parseInt(evt.target.value);
        setTimerInput(input);
      }}
      value={timerInput}
    />
  );
}
