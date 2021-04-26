import CustomTimer from './CustomTimer';
import DisplayMessage from './DisplayMessage';
import DisplayMiscklicks from './DisplayMiscklicks';
import DisplayScore from './DisplayScore';
import DisplayTitle from './DisplayTitle';
import MiscklicksSwitch from './MiscklicksSwitch';
import StartButton from './StartButton';
import ThemeSwitch from './ThemeSwitch';
import WaveDemo from './WaveDemo';

export default function OutOfGame({
  bubbleClickCount,
  score,
  themeToUse,
  setThemeToUse,
  message,
  miscklicksEnabled,
  miscklicks,
  setMiscklicksEnabled,
  setTimerInput,
  timerInput,
  handleButtonClick
}) {
  return (
    <>
      <DisplayTitle />
      <ThemeSwitch themeToUse={themeToUse} setThemeToUse={setThemeToUse} />
      <DisplayMessage message={message} />
      <DisplayScore bubbleClickCount={bubbleClickCount} score={score} />
      <DisplayMiscklicks
        miscklicksEnabled={miscklicksEnabled}
        miscklicks={miscklicks}
      />
      <MiscklicksSwitch
        setMiscklicksEnabled={setMiscklicksEnabled}
        miscklicksEnabled={miscklicksEnabled}
      />
      <CustomTimer setTimerInput={setTimerInput} timerInput={timerInput} />
      <StartButton handleButtonClick={handleButtonClick} />
      <WaveDemo bubbleClickCount={bubbleClickCount} />
    </>
  );
}
