import * as React from "react"


export const LoginForm: React.FunctionComponent = () => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
    }

    return <form onSubmit={handleFormSubmit}>
        <label>
            Enter your E-MAIL
            <input value={email} type="text" onChange={(event) => {
                setEmail(event.target.value)
            }} />
        </label>

        <label>
            Enter your password
            <input value={password} type="password" onChange={(event) => {
                setPassword(event.target.value)
            }} />
        </label>
    </form>


}
