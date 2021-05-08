import { Container, Paper, Typography } from '@material-ui/core';

export default function RemainingTime({ username, timerInput }) {
  return (
    <Container maxWidth="xs">
      <Paper>
        <Typography username={username}>{`${username}, your remaining time:
         ${timerInput}`}</Typography>
      </Paper>
    </Container>
  );
}
