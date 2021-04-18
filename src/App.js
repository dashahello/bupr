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

const maxBubbleHeight = (window.innerHeight / 100) * 42.8571428571;
const minBubbleHeight = (window.innerHeight / 100) * 7.14285714286;

const maxBubbleWidth = (window.innerWidth / 100) * 21.9619326501;
const minBubbleWidth = (window.innerWidth / 100) * 3.66032210835;

const maxBubbleSize =
  maxBubbleHeight < maxBubbleWidth ? maxBubbleHeight : maxBubbleWidth;
const minBubbleSize =
  minBubbleHeight < minBubbleWidth ? minBubbleHeight : minBubbleWidth;

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginTop: 16,
  },
}));

function App() {
  // states
  let [count, setCount] = useState(0);
  let [color, setColor] = useState(null);
  let [size, setSize] = useState(null);
  let [top, setTop] = useState(null);
  let [left, setLeft] = useState(null);
  const [gameInProgress, setGameInProgress] = useState(false);
  let [message, setMessege] = useState(
    'Set up the timer below, press "START THE GAME" and try to pop as many bubbles as possible (remember that every bubble has a lifetime of 1 second so it will disappear unless you click on it). Good luck :)'
  );
  let [timerInput, setTimerInput] = useState(DEFAULT_TIMER_INPUT);
  //
  useEffect(() => {
    setColor(randomRgbString(250));
    setSize(randomNumberBetween(maxBubbleSize, minBubbleSize));
    setTop(randomNumberBetween(size / 2, window.innerWidth - size - size / 2));
    setLeft(
      randomNumberBetween(size / 2, window.innerHeight - size - size / 2)
    );
  }, [count]); // only when count changes useEffect() renders (otherwise it would cause an infinite loop)
  // styles
  const bubbleStyle = {
    background: `${color}`,
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: `${left}px`,
  };
  // functions

  function handleButtonClick() {
    const interval = setInterval(() => {
      setTimerInput((currentRemainingTime) => currentRemainingTime - 1);
    }, 1000);

    setGameInProgress(true);

    setTimeout(() => {
      setGameInProgress(false);
      setTimerInput(DEFAULT_TIMER_INPUT);
      clearInterval(interval);
    }, timerInput * 1000);
  }

  function onBubbleClick() {
    setCount((currentCount) => currentCount + 1);
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

              {count !== 0 ? (
                <>
                  <Divider />
                  <Typography variant="h4">{`YOUR SCORE: ${count}`}</Typography>
                </>
              ) : null}

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
            </Paper>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
