import {
  CircularProgress,
  Container,
  makeStyles,
  Paper,
  ThemeProvider
} from '@material-ui/core';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import './index.css';
import themes from './themes';
//
// import InGame from './Components/InGame';
import OutOfGame from './Components/OutOfGame';
import DEFAULT_TIMER_INPUT from './DEFAULT_TIMER_INPUT';
//

const InGame = lazy(() => import('./Components/InGame'));

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
    setGameInProgress(true);
  }

  // const isTablet = useIsTablet();

  const [themeToUse, setThemeToUse] = useState(
    localStorage.getItem('themeToUse')
  );

  return (
    <ThemeProvider theme={themes[themeToUse]}>
      {gameInProgress ? (
        <Suspense fallback={<CircularProgress />}>
          <InGame
            timerInput={timerInput}
            bubbleClickCount={bubbleClickCount}
            setBubbleClickCount={setBubbleClickCount}
            setTimerInput={setTimerInput}
            setGameInProgress={setGameInProgress}
            setMessage={setMessage}
          />
        </Suspense>
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
