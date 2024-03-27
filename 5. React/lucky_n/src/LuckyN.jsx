import { useState } from 'react';
import { getRolls } from './util';
import Button from './Button';

import Dice from './Dice';

export default function LuckyN({ title="Roll dice", numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky {title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button rollFunc={roll} label="Re-Roll"/>
        </main>
    )
}
