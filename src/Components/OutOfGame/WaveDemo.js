import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';

export default function WaveDemo({
  dateMultipliers: { x: xMod, y: yMod },
  color
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((Math.sin(Date.now() * xMod) + 1) / 2);
      setY((Math.cos(Date.now() * yMod) + 1) / 2);
    }, 1000 / 60);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        transform: `translate3d(${x * window.innerWidth * 0.9}px, ${
          y * window.innerHeight * 0.9
        }px, 0)`,
        width: 50,
        height: 50,
        borderRadius: '100%',
        top: 0,
        left: 0,
        background: color,
        opacity: '70%',
        zIndex: -1
      }}
    />
  );
}
