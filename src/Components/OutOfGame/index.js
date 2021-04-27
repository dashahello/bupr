import { Container, makeStyles, Paper } from '@material-ui/core';
import { lazy, Suspense } from 'react';
import randomNumberBetween from '../../helpers/randomNumberBetween';
import randomRgbString from '../../helpers/randomRgbString';
import CustomTimer from './CustomTimer';
import DisplayMessage from './DisplayMessage';
import DisplayMiscklicks from './DisplayMiscklicks';
import DisplayScore from './DisplayScore';
import DisplayTitle from './DisplayTitle';
import MiscklicksSwitch from './MiscklicksSwitch';
import StartButton from './StartButton';
import ThemeSwitch from './ThemeSwitch';
import WaveDemo from './WaveDemo';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginTop: 16,
    zIndex: 1
  }
}));

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
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <WaveDemo
            dateMultipliers={{
              x: randomNumberBetween(0.0003, 0.001),
              y: randomNumberBetween(0.0003, 0.001)
            }}
            color={randomRgbString(250)}
          />
        ))}

      <Paper className={classes.main}>
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
      </Paper>
    </Container>
  );
}
