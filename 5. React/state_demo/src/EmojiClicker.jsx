import { useState } from "react";
import { v4 as uuid } from 'uuid';

function createRandomEmoji() {
    const randomEmoji = String.fromCodePoint(Math.floor(Math.random() * (0x1F64F - 0x1F600 + 1) + 0x1F600));
    return randomEmoji;
}

function addEmoji(emojis, setEmojis) {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: createRandomEmoji() }]);
}

function deleteEmoji(id, emojis, setEmojis) {
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.id !== id));
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: createRandomEmoji() }]);

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id, emojis, setEmojis)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}
                >
                    {e.emoji}
                </span>
            ))}<br />
            <button onClick={() => addEmoji(emojis, setEmojis)}>Add Emoji</button>
        </div>
    );
}
