export default function randomRgbString(maxChannelValue) {
  return `rgba( ${Math.random() * maxChannelValue}, ${
    Math.random() * maxChannelValue
  }, ${Math.random() * maxChannelValue}) 100%`;
}
