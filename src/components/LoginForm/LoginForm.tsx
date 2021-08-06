import * as React from "react"
import {FormWrapper, InputFormWrapper, InputWrapper} from "../../pages/Registration"
import styled from "styled-components"
import {AuthStore} from "../../stores/AuthStore"
import {LoginCommand} from "../../types/Auth/Requests/LoginCommand"


export const LoginForm: React.FunctionComponent = () => {

    const authStore = new AuthStore()

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        authStore.login(new LoginCommand(email, password))
        window.location.reload()
    }

    return (
        <FormWrapper onSubmit={handleFormSubmit}>
            <InputFormWrapper>
                <label>
                    Enter your E-MAIL
                    <InputWrapper value={email} type="text" onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </label>
            </InputFormWrapper>

            <InputFormWrapper>
                <label>
                    Enter your password
                    <InputWrapper value={password} type="password" onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </label>
            </InputFormWrapper>


            <SubmitButton type="submit" value="submit" />

        </FormWrapper>
    )


}

const SubmitButton = styled("input")`
    background: linear-gradient(#020024, #8951e9);
    width: 100%;
    height: 8.5%;
    padding: 10px 20px;
    color: #f1ecf2;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.6s;
    cursor: pointer;
    margin-top: 40px;
    letter-spacing: 2px;
    border: 2px solid;
    &:hover {
    background: #243b55;
    color: #fff;
    border-radius: 5px;
    }
`




