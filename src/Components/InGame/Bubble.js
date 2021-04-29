import audio from './../../assets/audio.mp3';
import { useEffect, useState } from 'react';
import randomNumberBetween from '../../helpers/randomNumberBetween';
import randomRgbString from '../../helpers/randomRgbString';

const BUBBLE_HOVER_SCALE = 1.1;

// const AUDIO = document.getElementById('bubble_pop_sound');
const AUDIO = new Audio(audio);

const BUBBLE_ID = 'bubble';
let BUBBLE_TIMEOUT;

export default function Bubble({
  bubbleClickCount,
  setBubbleClickCount,
  miscklicksEnabled
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

    clearTimeout(BUBBLE_TIMEOUT);
    BUBBLE_TIMEOUT = setTimeout(calculateBubbleStyle, 1000);
  }
  useEffect(calculateBubbleStyle, [bubbleClickCount]); // eslint-disable-line

  useEffect(() => {
    function onWindowResize() {
      calculateBubbleStyle();
    }
    window.addEventListener('resize', onWindowResize);

    function onWindowClick(evt) {
      if (evt.target.id !== BUBBLE_ID) {
        calculateBubbleStyle();
      }
    }

    if (miscklicksEnabled) {
      window.addEventListener('click', onWindowClick);
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);

      if (miscklicksEnabled) {
        window.removeEventListener('click', onWindowClick);
      }

      if (BUBBLE_TIMEOUT) clearTimeout(BUBBLE_TIMEOUT);
    };
  }, []); // eslint-disable-line

  function onBubbleClick() {
    playAudio();
    setBubbleClickCount((currentCount) => currentCount + 1);
  }

  function playAudio() {
    AUDIO.play();
  }

  return <div id={BUBBLE_ID} style={bubbleStyle} onClick={onBubbleClick}></div>;
}
