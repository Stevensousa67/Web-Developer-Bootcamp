// App.jsx
import './App.css';
import LuckyN from './LuckyN';
import { sum } from './util';

function lessThan4(dice) {
  return sum(dice) < 4;
}

function sumEquals15(dice) {
  return sum(dice) === 15;
}

function allSame(dice) {
  return dice.every(val => val === dice[0]);
}

export default function App() {
  return (
    <div className="App">
      <LuckyN title={"Less Than 4"} winCheck={lessThan4} />
      <LuckyN title={"Sum Equals 15"} numDice={3} winCheck={sumEquals15} />
      <LuckyN title={"Same Die"} numDice={3} winCheck={allSame} />
    </div>
  );
}
