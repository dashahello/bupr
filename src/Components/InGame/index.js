import { useEffect } from 'react';
import DEFAULT_TIMER_INPUT from '../../DEFAULT_TIMER_INPUT';
import Bubble from './Bubble';
import RemainingTime from './RemainingTime';

export default function InGame({
  timerInput,
  bubbleClickCount,
  setBubbleClickCount,
  setTimerInput,
  setGameInProgress,
  miscklicksEnabled,
  score,
  bubbleLifetime,
  username,
  setUsername
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerInput((currentRemainingTime) => currentRemainingTime - 1);
    }, 1000);

    setTimeout(() => {
      setGameInProgress(false);

      setTimerInput(DEFAULT_TIMER_INPUT);
      clearInterval(interval);
    }, timerInput * 1000);
  }, []); // eslint-disable-line
  // "eslint-disable-line" allows to disable rule warnings
  return (
    <>
      <RemainingTime
        timerInput={timerInput}
        username={username}
        setUsername={setUsername}
      />
      <Bubble
        bubbleClickCount={bubbleClickCount}
        setBubbleClickCount={setBubbleClickCount}
        miscklicksEnabled={miscklicksEnabled}
        score={score}
        bubbleLifetime={bubbleLifetime}
      />
    </>
  );
}
