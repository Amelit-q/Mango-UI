import React from "react"
import {observer} from "mobx-react-lite"

export const Registration = observer(() => {
    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    // const [input, setInput] = React.useState("")
    // const [input, setInput] = React.useState("")
    const [registrationFormFields, setRegistrationFormFields] = React.useState([])


    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        // @ts-ignore
        setRegistrationFormFields([...registrationFormFields, phoneNumber, email, name, password])
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Phone Number:
                <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}
                       placeholder={"Enter your phone number"} />
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={(event => setEmail(event.target.value))}
                       placeholder={"Enter your E-MAIL"} />
            </label>

            <label>
                Name:
                <input type="text" value={name} onChange={event => setName(event.target.value)}
                       placeholder={"Enter your name"} />
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={event => setPassword(event.target.value)}
                       placeholder={"Enter your E-MAIL"} />
            </label>
            <input type="submit" />

        </form>
    )
})
