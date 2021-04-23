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
  Typography,
  useTheme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.css';
import themes from './themes';
import useIsTablet from './useIsTablet';

function randomRgbString(maxChannelValue) {
  return `rgb( ${Math.random() * maxChannelValue}, ${
    Math.random() * maxChannelValue
  }, ${Math.random() * maxChannelValue})`;
}

function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const DEFAULT_TIMER_INPUT = 10;
const BUBBLE_HOVER_SCALE = 1.1;

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginTop: 16,
  },
}));

function App() {
  const [bubbleClickCount, setBubbleClickCount] = useState(null);
  const [totalClickCount, setTotalClickCount] = useState(0);
  const [bubbleStyle, setBubbleStyle] = useState(null);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [message, setMessage] = useState(
    'Set up the timer below, press "START THE GAME" and try to pop as many bubbles as possible (remember that every bubble has a lifetime of 1 second so it will disappear unless you click on it). Good luck :)'
  );
  const [timerInput, setTimerInput] = useState(DEFAULT_TIMER_INPUT);
  const [misclicksEnabled, setMiscklicksEnabled] = useState(false);

  function calculateBubbleStyle() {
    const onePercentOfAverageScreenDimension =
      (window.innerWidth + window.innerHeight) / 2 / 100;
    const smallestScreenDimension =
      window.innerHeight < window.innerWidth
        ? window.innerHeight
        : window.innerWidth;

    const minBubbleSize = onePercentOfAverageScreenDimension * 5;
    const maxBubbleSize = onePercentOfAverageScreenDimension * 25;

    const color = randomRgbString(250);
    let size = randomNumberBetween(minBubbleSize, maxBubbleSize);

    if (size * 2 > smallestScreenDimension) {
      size = smallestScreenDimension / 2;
    }

    const maxBubbleGrowth = (size * BUBBLE_HOVER_SCALE - size) / 2;

    const top = randomNumberBetween(
      maxBubbleGrowth,
      window.innerHeight - size - maxBubbleGrowth
    );
    const left = randomNumberBetween(
      maxBubbleGrowth,
      window.innerWidth - size - maxBubbleGrowth
    );

    setBubbleStyle({
      background: `${color}`,
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}px`,
      left: `${left}px`,
    });
  }
  useEffect(calculateBubbleStyle, [bubbleClickCount]);

  useEffect(() => {
    function onWindowResize() {
      calculateBubbleStyle();
    }
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  });

  useEffect(() => {
    function getTotalClickCount() {
      console.log(totalClickCount);
      setTotalClickCount(
        (currentTotalClickCount) => currentTotalClickCount + 1
      );
    }
    if (gameInProgress && misclicksEnabled) {
      window.addEventListener('click', getTotalClickCount);
      return () => {
        window.removeEventListener('click', getTotalClickCount);
      };
    }
  });

  function handleButtonClick() {
    console.log(misclicksEnabled);
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

  function onBubbleClick() {
    setBubbleClickCount((currentCount) => currentCount + 1);
  }

  const classes = useStyles();

  const isTablet = useIsTablet();

  const [themeToUse, setThemeToUse] = useState(
    localStorage.getItem('themeToUse')
  );

  useEffect(() => {
    document.body.style.backgroundColor =
      themeToUse === 'dark' ? 'black' : 'white';
  }, [themeToUse]);

  return (
    <ThemeProvider theme={themes[themeToUse]}>
      {gameInProgress ? (
        <>
          <Container maxWidth="xs">
            <Paper>
              <Typography>{`REMAINING TIME: ${timerInput}`}</Typography>
            </Paper>
          </Container>

          <div id="bubble" style={bubbleStyle} onClick={onBubbleClick}></div>
        </>
      ) : (
        <>
          <Container maxWidth="xs">
            <Paper className={classes.main}>
              <Typography variant="h1">BUPR</Typography>
              <Divider />
              <FormControlLabel
                control={
                  <Switch
                    checked={themeToUse === 'dark'}
                    onChange={(evt) => {
                      const themeToSet = evt.target.checked ? 'dark' : 'light';
                      setThemeToUse(themeToSet);
                      localStorage.setItem('themeToUse', themeToSet);
                    }}
                    name="checkedA"
                  />
                }
                label="Dark theme"
              />
              <Divider />

              <Typography>{message}</Typography>

              {bubbleClickCount !== null ? (
                <>
                  <Divider />
                  <Typography variant="h4">
                    {misclicksEnabled
                      ? `YOUR SCORE: ${
                          bubbleClickCount -
                          (totalClickCount - bubbleClickCount)
                        } 
                Miscklicks: ${totalClickCount - bubbleClickCount}`
                      : `YOUR SCORE: ${bubbleClickCount}`}
                  </Typography>
                </>
              ) : null}
              <Divider />

              <input
                type="checkbox"
                id="check_miscklicks"
                checked={misclicksEnabled === true}
                onChange={() =>
                  setMiscklicksEnabled(misclicksEnabled ? false : true)
                }
              ></input>

              <label htmlFor="check_miscklicks">Miscklicks enabled</label>

              <Divider style={{ marginBottom: 8 }} />

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

              <Button
                style={{ marginTop: 8 }}
                onClick={handleButtonClick}
                variant="contained"
                color="primary"
              >
                START THE GAME
              </Button>

              <WaveDemo />
            </Paper>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
}

function WaveDemo() {
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
        opacity: '70%',
      }}
    ></div>
  );
}

export default App;
