import Slots from './Slots';
import './App.css';

export default function App() {
  const slot_items = ["🍒", "🍊", "🍇"]
  return (
    <div className="container">
      <Slots val1={slot_items} val2={slot_items} val3={slot_items} />
      <Slots val1={slot_items} val2={slot_items} val3={slot_items} />
    </div>
  )
}