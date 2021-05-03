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
  setMessage,
  miscklicksEnabled,
  score,
  bubbleLifetime
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

  return (
    <>
      <RemainingTime timerInput={timerInput} />
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
