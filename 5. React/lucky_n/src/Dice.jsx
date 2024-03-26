import Die from './Die';
import './Dice.css';

export default function Dice({ dice, color}) {
    return (
        <section className="Dice">
            {dice.map((val, i) => (
                <Die key={i} val={val} color={color} />
            ))}
        </section>
    )
}