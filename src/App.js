import { CircularProgress, ThemeProvider } from '@material-ui/core';
import React, { lazy, Suspense, useEffect, useState } from 'react';

import './index.css';
import themes from './themes';
import OutOfGame from './Components/OutOfGame';
import DEFAULT_TIMER_INPUT from './DEFAULT_TIMER_INPUT';

const InGame = lazy(() => import('./Components/InGame'));

function App() {
  const [bubbleClickCount, setBubbleClickCount] = useState(null);
  const [totalClickCount, setTotalClickCount] = useState(0);
  const [score, setScore] = useState(null);
  const [miscklicks, setMiscklicks] = useState(null);

  const [gameInProgress, setGameInProgress] = useState(false);

  const [timerInput, setTimerInput] = useState(DEFAULT_TIMER_INPUT);
  const [miscklicksEnabled, setMiscklicksEnabled] = useState(false);
  const [bubbleLifetime, setBubbleLifetime] = useState(false);
  const [username, setUsername] = useState('User');

  useEffect(() => {
    if (miscklicksEnabled) {
      setScore(bubbleClickCount - (totalClickCount - bubbleClickCount));
      setMiscklicks(totalClickCount - bubbleClickCount);
    } else {
      setScore(bubbleClickCount);
    }
  }, [gameInProgress]); // eslint-disable-line

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
  }, [miscklicksEnabled, gameInProgress]);
  //local storage
  function handleButtonClick() {
    setBubbleClickCount(0);
    setTotalClickCount(0);
    setMiscklicks(null);
    setGameInProgress(true);
    // console.log(username);
  }

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
            miscklicksEnabled={miscklicksEnabled}
            score={score}
            bubbleLifetime={bubbleLifetime}
            setBubbleLifetime={setBubbleLifetime}
            username={username}
            setUsername={setUsername}
          />
        </Suspense>
      ) : (
        <>
          <OutOfGame
            bubbleClickCount={bubbleClickCount}
            score={score}
            themeToUse={themeToUse}
            setThemeToUse={setThemeToUse}
            miscklicksEnabled={miscklicksEnabled}
            miscklicks={miscklicks}
            setMiscklicksEnabled={setMiscklicksEnabled}
            setTimerInput={setTimerInput}
            timerInput={timerInput}
            handleButtonClick={handleButtonClick}
            bubbleLifetime={bubbleLifetime}
            setBubbleLifetime={setBubbleLifetime}
            username={username}
            setUsername={setUsername}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
