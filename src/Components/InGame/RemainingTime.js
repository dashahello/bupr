import { Container, Paper, Typography } from '@material-ui/core';

export default function RemainingTime({ timerInput }) {
  return (
    <Container maxWidth="xs">
      <Paper>
        <Typography>{`REMAINING TIME: ${timerInput}`}</Typography>
      </Paper>
    </Container>
  );
}
