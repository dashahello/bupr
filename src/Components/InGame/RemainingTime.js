import { Container, Paper, Typography } from '@material-ui/core';

export default function RemainingTime({ timerInput, username }) {
  return (
    <Container maxWidth="xs">
      <Paper>
        <Typography>{`${username}, your remaining time:
         ${timerInput}`}</Typography>
      </Paper>
    </Container>
  );
}
