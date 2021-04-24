import Bubble from './Bubble';
import RemainingTime from './RemainingTime';

export default function InGame({
  timerInput,
  bubbleClickCount,
  setBubbleClickCount
}) {
  return (
    <>
      <RemainingTime timerInput={timerInput} />
      <Bubble
        bubbleClickCount={bubbleClickCount}
        setBubbleClickCount={setBubbleClickCount}
      />
    </>
  );
}
