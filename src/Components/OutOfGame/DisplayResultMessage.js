import { Divider, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function DisplayResultMessage({
  score,
  timerInput,
  gameInProgress
}) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(score > timerInput ? 'GOOD JOB!' : 'YOU CAN DO BETTER');
  }, [score, gameInProgress]);
  return (
    <>
      <Divider />
      <Typography>{score !== null ? message : null}</Typography>
    </>
  );
}
