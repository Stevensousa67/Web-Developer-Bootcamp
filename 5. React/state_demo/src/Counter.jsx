import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => setCount(count + 1);
    const addThree = () => {
        // Correct way to update state based on previous state. This generates a queue of updates.
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}> +1 </button>
            <button onClick={addThree}> +1 </button>
        </div>
    )
}
