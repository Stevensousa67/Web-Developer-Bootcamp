import './Button.css';

export default function Button({ rollFunc, label="Roll Dice" }) {
    return (<button className="Button" onClick={rollFunc}>{label}</button>)
}