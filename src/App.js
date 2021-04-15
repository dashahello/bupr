import React, { useState } from 'react';

let bubbleStyles;
function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomRgbString(maxChannelValue) {
  return `rgb( ${Math.random() * maxChannelValue}, ${
    Math.random() * maxChannelValue
  }, ${Math.random() * maxChannelValue})`;
}

function createBubble() {
  const maxBubbleHeight = (window.innerHeight / 100) * 42.8571428571;
  const minBubbleHeight = (window.innerHeight / 100) * 7.14285714286;

  const maxBubbleWidth = (window.innerWidth / 100) * 21.9619326501;
  const minBubbleWidth = (window.innerWidth / 100) * 3.66032210835;

  const maxBubbleSize =
    maxBubbleHeight < maxBubbleWidth ? maxBubbleHeight : maxBubbleWidth;
  const minBubbleSize =
    minBubbleHeight < minBubbleWidth ? minBubbleHeight : minBubbleWidth;

  const bubbleSize = randomNumberBetween(maxBubbleSize, minBubbleSize);

  const color = randomRgbString(250);

  const posX = randomNumberBetween(
    bubbleSize / 2,
    window.innerWidth - bubbleSize - bubbleSize / 2
  );
  const posY = randomNumberBetween(
    bubbleSize / 2,
    window.innerHeight - bubbleSize - bubbleSize / 2
  );

  bubbleStyles = {
    position: 'absolute',
    width: `${bubbleSize}px`,
    height: `${bubbleSize}px`,
    borderRadius: '100px',
    background: `${color}`,
    top: `${posX}px`,
    left: `${posY}px`,
  };
}

function App() {
  let [count, setCount] = useState(0);

  function handleClick() {
    createBubble();
    setCount(count + 1);
  }
  return (
    <div>
      <p>{`Count ${count}`}</p>
      <div style={bubbleStyles}></div>
      <button onClick={handleClick}>START THE GAME</button>
    </div>
  );
}

export default App;
