import { useState } from 'react';

export default function ScoreKeeper({ numPlayers, target }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (index) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === index) return score + 1;
                return score;
            })
        });
    };
    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return (
                        <li key={index}>Player{index + 1}: {score}
                            <button onClick={() => incrementScore(index)} disabled={scores.some(score => score >= target)}>
                                +1
                            </button>
                            {score >= target && <b>Winner!</b> }
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}