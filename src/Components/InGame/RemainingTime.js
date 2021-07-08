import { Container, Paper, Typography } from '@material-ui/core';

export default function RemainingTime({ timerInput, username }) {
  const user = localStorage.getItem('user');
  return (
    <Container maxWidth="xs">
      <Paper>
        <Typography>{`${user}, your remaining time:
         ${timerInput}`}</Typography>
      </Paper>
    </Container>
  );
}
