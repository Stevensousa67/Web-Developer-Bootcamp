import { useState } from "react"

export default function SignUpForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", password: "" });
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    }

    const handleSubmit = () => {
        console.log(`${formData.firstName} ${formData.lastName} ${formData.password}`)
    }
    return (
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input id="firstname" type="text" placeholder="John" value={formData.firstName} name="firstName" onChange={handleChange} />

            <label htmlFor="lastname">Last Name: </label>
            <input id="lastname" type="text" placeholder="Doe" value={formData.lastName} name="lastName" onChange={handleChange} />

            <label htmlFor="password">Password: </label>
            <input id="password" type="password" placeholder="Password" value={formData.password} name="password" onChange={handleChange} />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}