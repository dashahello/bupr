import {
  Button,
  Container,
  Divider,
  FormControlLabel,
  makeStyles,
  Paper,
  Switch,
  TextField,
  ThemeProvider,
  Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.css';
import themes from './themes';
//

import ThemeSwitch from './Components/ThemeSwitch';
import InGame from './Components/InGame';
//

const DEFAULT_TIMER_INPUT = 5;

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginTop: 16
  }
}));

function App() {
  const classes = useStyles();

  const [bubbleClickCount, setBubbleClickCount] = useState(null);
  const [totalClickCount, setTotalClickCount] = useState(0);
  const [score, setScore] = useState(0);

  const [gameInProgress, setGameInProgress] = useState(false);
  const [message, setMessage] = useState(
    'Set up the timer below, press "START THE GAME" and try to pop as many bubbles as possible (remember that every bubble has a lifetime of 1 second so it will disappear unless you click on it). Good luck :)'
  );
  const [timerInput, setTimerInput] = useState(DEFAULT_TIMER_INPUT);
  const [miscklicksEnabled, setMiscklicksEnabled] = useState(false);

  useEffect(() => {
    if (miscklicksEnabled) {
      setScore(bubbleClickCount - (totalClickCount - bubbleClickCount));
    } else {
      setScore(bubbleClickCount);
    }
  }, [gameInProgress]);

  useEffect(() => {
    function getTotalClickCount() {
      setTotalClickCount(
        (currentTotalClickCount) => currentTotalClickCount + 1
      );
    }
    if (gameInProgress && miscklicksEnabled) {
      window.addEventListener('click', getTotalClickCount);
      return () => {
        window.removeEventListener('click', getTotalClickCount);
      };
    }
  });

  function handleButtonClick() {
    setBubbleClickCount(0);
    setTotalClickCount(0);
    const interval = setInterval(() => {
      setTimerInput((currentRemainingTime) => currentRemainingTime - 1);
    }, 1000);

    setGameInProgress(true);

    setTimeout(() => {
      setGameInProgress(false);
      setMessage(
        bubbleClickCount > timerInput ? 'GOOD JOB!' : 'YOU CAN DO BETTER'
      );
      setTimerInput(DEFAULT_TIMER_INPUT);
      clearInterval(interval);
    }, timerInput * 1000);
  }

  // const isTablet = useIsTablet();

  const [themeToUse, setThemeToUse] = useState(
    localStorage.getItem('themeToUse')
  );

  return (
    <ThemeProvider theme={themes[themeToUse]}>
      {gameInProgress ? (
        <InGame
          timerInput={timerInput}
          bubbleClickCount={bubbleClickCount}
          setBubbleClickCount={setBubbleClickCount}
        />
      ) : (
        <>
          <Container maxWidth="xs">
            <Paper className={classes.main}>
              <Typography variant="h1">BUPR</Typography>
              <Divider />
              <ThemeSwitch
                themeToUse={themeToUse}
                setThemeToUse={setThemeToUse}
              />
              <Divider />
              <Typography>{message}</Typography>

              <DisplayScore bubbleClickCount={bubbleClickCount} score={score} />

              <Divider />
              <MiscklicksSwitch
                miscklicksEnabled={miscklicksEnabled}
                setMiscklicksEnabled={setMiscklicksEnabled}
              />
              <Divider style={{ marginBottom: 8 }} />
              <CustomTimer
                timerInput={timerInput}
                setTimerInput={setTimerInput}
              />
              <StartButton handleButtonClick={handleButtonClick} />
              <WaveDemo bubbleClickCount={bubbleClickCount} />
            </Paper>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
}

function DisplayScore({ bubbleClickCount, score }) {
  return bubbleClickCount !== null ? (
    <>
      <Divider />
      <Typography variant="h4">{`YOUR SCORE: ${score}`}</Typography>
    </>
  ) : null;
}

function MiscklicksSwitch({ setMiscklicksEnabled, miscklicksEnabled }) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={miscklicksEnabled === true}
          onChange={() =>
            setMiscklicksEnabled(miscklicksEnabled ? false : true)
          }
          name="checkedB"
        />
      }
      label="Miscklicks enabled"
    />
  );
}

function CustomTimer({ setTimerInput, timerInput }) {
  return (
    <TextField
      type="number"
      label="Timer (seconds)"
      variant="outlined"
      onChange={(evt) => {
        const input = parseInt(evt.target.value);
        setTimerInput(input);
      }}
      value={timerInput}
    />
  );
}

function StartButton({ handleButtonClick }) {
  return (
    <Button
      style={{ marginTop: 8 }}
      onClick={handleButtonClick}
      variant="contained"
      color="primary"
    >
      START THE GAME
    </Button>
  );
}
function WaveDemo({ bubbleClickCount }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((Math.sin(Date.now() * 0.00077121) + 1) / 2);
      setY((Math.cos(Date.now() * 0.00099083) + 1) / 2);
    }, 1000 / 60);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        transform: `translate3d(${x * window.innerWidth * 0.9}px, ${
          y * window.innerHeight * 0.9
        }px, 0)`,
        width: 50,
        height: 50,
        borderRadius: '100%',
        top: 0,
        left: 0,
        background: '#ba68c8',
        opacity: '70%'
      }}
    >
      <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>
        {bubbleClickCount}
      </Typography>
    </div>
  );
}

export default App;
