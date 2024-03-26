import "./Die.css";

export default function Die({ val, color='blueslate' }) {
    return (
        <div className="Die" style={{backgroundColor: color}}>
            {val}
        </div>
    )
}