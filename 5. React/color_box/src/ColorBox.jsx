import './ColorBox.css';
import { useState } from 'react';

function RandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default function ColorBox() {
  const [color, setColor] = useState(RandomColor)
  const changeColor = () => { setColor(RandomColor);}
  return (
    <div className="ColorBox" onClick={changeColor} style={{ backgroundColor: color }}></div>
  );
}