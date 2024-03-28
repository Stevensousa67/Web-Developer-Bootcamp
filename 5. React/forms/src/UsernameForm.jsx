import { useState } from "react"

export default function UsernameForm() {
    const [username, setUsername] = useState('')
    const updateUsername = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <label htmlFor="username">Type username: </label>
            <input id="username" type="text" placeholder="username" value={username} onChange={updateUsername} />
            <button>Submit</button>
        </div>
    )
}