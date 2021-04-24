import audio from './../../assets/audio.wav';
import { useEffect, useState } from 'react';
import randomNumberBetween from '../../helpers/randomNumberBetween';
import randomRgbString from '../../helpers/randomRgbString';

const BUBBLE_HOVER_SCALE = 1.1;

const AUDIO = new Audio(audio);

export default function Bubble({
  onBubbleClick,
  bubbleClickCount,
  setBubbleClickCount
}) {
  const [bubbleStyle, setBubbleStyle] = useState(null);

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
      left: `${left}px`
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

  function onBubbleClick() {
    playAudio();
    setBubbleClickCount((currentCount) => currentCount + 1);
  }

  function playAudio() {
    AUDIO.play();
  }

  return <div id="bubble" style={bubbleStyle} onClick={onBubbleClick}></div>;
}
