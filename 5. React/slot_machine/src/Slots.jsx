export default function Slots(props) {
    const slot1 = props.val1[Math.floor(Math.random() * 3)];
    const slot2 = props.val2[Math.floor(Math.random() * 3)];
    const slot3 = props.val3[Math.floor(Math.random() * 3)];
    const isWinner = (slot1 === slot2) && (slot2 === slot3);
    return (
        <div>
            <h1>{slot1} {slot2} {slot3}</h1>
            {isWinner ? (
                <div>
                    <h2 style={{ color: "green" }}>You win!</h2>
                    <h3>Congrats!</h3>
                </div>
            ) : (
                <h2 style={{ color: "red" }}>You lose!</h2>)
            }
        </div>
    )
}