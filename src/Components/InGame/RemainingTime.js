import { Container, Paper, Typography } from '@material-ui/core';

export default function RemainingTime({ timerInput }) {
  return (
    <Container maxWidth="xs">
      <Paper>
        <Typography>{` your remaining time:
         ${timerInput}`}</Typography>
      </Paper>
    </Container>
  );
}
