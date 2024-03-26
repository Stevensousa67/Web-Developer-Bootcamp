import { useState } from 'react';

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
    function increaseScore(player) {
        setScores((currentScores) => {
            return { ...currentScores, [player]: currentScores[player] + 1 };
        });
    }

    return (
        <div>
            <h2>Score Keeper</h2>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={() => increaseScore('p1Score')}>Player 1: +1</button>
            <button onClick={() => increaseScore('p2Score')}>Player 2: +1</button>

        </div>
    )
}