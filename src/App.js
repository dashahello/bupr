import { Container, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './index.css';
import themes from './themes';
//
import InGame from './Components/InGame';
import OutOfGame from './Components/OutOfGame';
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
  const [miscklicks, setMiscklicks] = useState(null);

  const [gameInProgress, setGameInProgress] = useState(false);
  const [message, setMessage] = useState(
    'Set up the timer below, press "START THE GAME" and try to pop as many bubbles as possible (remember that every bubble has a lifetime of 1 second so it will disappear unless you click on it). Good luck :)'
  );

  const [timerInput, setTimerInput] = useState(DEFAULT_TIMER_INPUT);
  const [miscklicksEnabled, setMiscklicksEnabled] = useState(false);

  useEffect(() => {
    if (miscklicksEnabled) {
      setScore(bubbleClickCount - (totalClickCount - bubbleClickCount));
      setMiscklicks(totalClickCount - bubbleClickCount);
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
    setMiscklicks(null);
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
              <OutOfGame
                bubbleClickCount={bubbleClickCount}
                score={score}
                themeToUse={themeToUse}
                setThemeToUse={setThemeToUse}
                message={message}
                miscklicksEnabled={miscklicksEnabled}
                miscklicks={miscklicks}
                setMiscklicksEnabled={setMiscklicksEnabled}
                setTimerInput={setTimerInput}
                timerInput={timerInput}
                handleButtonClick={handleButtonClick}
              />
            </Paper>
          </Container>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
