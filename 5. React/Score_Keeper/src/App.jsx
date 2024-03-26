import './App.css'
import ScoreKeeper from './ScoreKeeper'

export default function App() {
  return (
    <div>
      <ScoreKeeper numPlayers={10} target={3} />
    </div>
  )

}