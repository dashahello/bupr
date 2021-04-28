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
  miscklicksEnabled
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimerInput((currentRemainingTime) => currentRemainingTime - 1);
    }, 1000);

    setTimeout(() => {
      setGameInProgress(false);
      setMessage(
        bubbleClickCount > timerInput ? 'GOOD JOB!' : 'YOU CAN DO BETTER'
      );

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
      />
    </>
  );
}
