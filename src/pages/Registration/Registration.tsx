import React from "react"
import {observer} from "mobx-react-lite"
import {AuthStore} from "../../stores/AuthStore"
import {RegisterCommand} from "../../types/Auth/Requests/RegisterCommand"

export const Registration = observer(() => {
    const authStore = new AuthStore()

    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [registrationFormFields, setRegistrationFormFields] = React.useState([])
    const [termsAccepted, setTermsAccepted] = React.useState(false)

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        // @ts-ignore
        setRegistrationFormFields([...registrationFormFields, phoneNumber, name, password, email])

        authStore.registration(new RegisterCommand(phoneNumber, email, name, password, 1, true))

        // console.log(email, name, password, "inside form")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Phone Number:
                <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder={"Enter your phone number"} />
            </label>
            <label>
                Email:
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={"Enter your E-MAIL"} />
            </label>

            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder={"Enter your name"} />
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={"Enter your E-MAIL"} />
            </label>
            <label>
                {/* <input type="checkbox" defaultChecked={termsAccepted}  value="1234"/> */}

                check me!
            </label>
            <input type="submit" value="submit" />
            <input type="checkbox" id="topping" name="topping" value="Paneer" checked={termsAccepted} onChange={() => setTermsAccepted(true)} />
        </form>
    )
})
