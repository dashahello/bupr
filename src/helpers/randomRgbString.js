export default function randomRgbString(maxChannelValue) {
  return `rgb( ${Math.random() * maxChannelValue}, ${
    Math.random() * maxChannelValue
  }, ${Math.random() * maxChannelValue})`;
}
