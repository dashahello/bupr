import { Divider, Typography } from '@material-ui/core';

export default function DisplayScore({ bubbleClickCount, score }) {
  return bubbleClickCount !== null ? (
    <>
      <Divider />
      <Typography variant="h4">{`YOUR SCORE: ${score}`}</Typography>
      <Divider style={{ marginBottom: 10 }} />
    </>
  ) : null;
}
