import { Container, makeStyles, Paper } from '@material-ui/core';
import { useEffect, useState } from 'react';
import randomNumberBetween from '../../helpers/randomNumberBetween';
import randomRgbString from '../../helpers/randomRgbString';
import CustomTimer from './CustomTimer';
import DisplayResultMessage from './DisplayResultMessage';
import DisplayMiscklicks from './DisplayMiscklicks';
import DisplayScore from './DisplayScore';
import DisplayTitle from './DisplayTitle';
import MiscklicksSwitch from './MiscklicksSwitch';
import StartButton from './StartButton';
import ThemeSwitch from './ThemeSwitch';
import WaveDemo from './WaveDemo';
import DisplayInstructions from './DisplayInstructions';

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
  handleButtonClick,
  setMessage
}) {
  const classes = useStyles();

  const [waveDemoProps, setWaveDemoProps] = useState(null);

  useEffect(() => {
    const _waveDemoProps = [];

    for (let i = 0; i < 5; i++) {
      _waveDemoProps.push({
        dateMultipliers: {
          x: randomNumberBetween(0.0003, 0.001),
          y: randomNumberBetween(0.0003, 0.001)
        },
        color: randomRgbString(250)
      });
    }

    setWaveDemoProps(_waveDemoProps);
  }, []);

  return (
    <Container maxWidth="xs">
      {waveDemoProps
        ? waveDemoProps.map((props, i) => <WaveDemo key={i} {...props} />)
        : null}

      <Paper className={classes.main}>
        <DisplayTitle />
        <DisplayInstructions />
        <ThemeSwitch setThemeToUse={setThemeToUse} themeToUse={themeToUse} />
        <DisplayResultMessage
          message={message}
          setMessage={setMessage}
          score={score}
          timerInput={timerInput}
        />
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
