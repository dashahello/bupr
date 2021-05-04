import audio from './../../assets/audio.mp3';
import { useEffect, useState } from 'react';
import randomNumberBetween from '../../helpers/randomNumberBetween';
import randomRgbString from '../../helpers/randomRgbString';

const BUBBLE_HOVER_SCALE = 1.1;

const AUDIO = new Audio(audio);

const BUBBLE_ID = 'bubble';
let BUBBLE_TIMEOUT;

export default function Bubble({
  bubbleClickCount,
  setBubbleClickCount,
  miscklicksEnabled,
  bubbleLifetime
}) {
  const [bubbleStyle, setBubbleStyle] = useState(null);

  let color;
  let size;
  let top;
  let left;

  function calculateBubbleStyle() {
    const onePercentOfAverageScreenDimension =
      (window.innerWidth + window.innerHeight) / 2 / 100;
    const smallestScreenDimension =
      window.innerHeight < window.innerWidth
        ? window.innerHeight
        : window.innerWidth;

    const minBubbleSize = onePercentOfAverageScreenDimension * 5;
    const maxBubbleSize = onePercentOfAverageScreenDimension * 25;

    color = randomRgbString(250);
    size = randomNumberBetween(minBubbleSize, maxBubbleSize);

    if (size * 2 > smallestScreenDimension) {
      size = smallestScreenDimension / 2;
    }

    const maxBubbleGrowth = (size * BUBBLE_HOVER_SCALE - size) / 2;

    top = randomNumberBetween(
      maxBubbleGrowth,
      window.innerHeight - size - maxBubbleGrowth
    );

    left = randomNumberBetween(
      maxBubbleGrowth,
      window.innerWidth - size - maxBubbleGrowth
    );
  }

  function changeBubbleStyle() {
    calculateBubbleStyle();
    setBubbleStyle({
      // background: `${color}`,
      background: `linear-gradient(
        to bottom, 
        rgba(254,255,255) 0%,
        rgba(221,241,249) 35%,
        ${color} 
      )`,
      width: `${size}px`,
      height: `${size}px`,
      top: `${top}px`,
      left: `${left}px`
    });

    if (bubbleLifetime) {
      clearTimeout(BUBBLE_TIMEOUT);
      BUBBLE_TIMEOUT = setTimeout(changeBubbleStyle, 1000);
    }
  }

  useEffect(changeBubbleStyle, [bubbleClickCount]); // eslint-disable-line

  useEffect(() => {
    function onWindowResize() {
      changeBubbleStyle();
    }
    window.addEventListener('resize', onWindowResize);

    function onWindowClick(evt) {
      if (evt.target.id !== BUBBLE_ID) {
        changeBubbleStyle();
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
