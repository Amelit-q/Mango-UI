import React from "react"
import {observer} from "mobx-react-lite"
import {AuthStore} from "../../stores/AuthStore"
import styled from "styled-components"
import {VerificationMethod} from "../../types/Auth/Enums/VerificationMethod"
import {RegisterCommand} from "../../types/Auth/Requests/RegisterCommand"

export const Registration: React.FunctionComponent = observer(() => {
    const authStore = new AuthStore()


    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [termsAccepted, setTermsAccepted] = React.useState(true)
    const [verificationMethod, setVerificationMethod] = React.useState<VerificationMethod>(1)
    console.log(verificationMethod, "verification method")

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        setTermsAccepted(true)
        console.log(verificationMethod, "this is the value of verification method: 1 means by telephone, 2 means by e-mail")
        authStore.registration(new RegisterCommand(phoneNumber, email, name, password, verificationMethod, termsAccepted))
    }

    const handleSelectChange = (event: any) => {
        if (event.target.value === "phone") {
            setVerificationMethod(1)
        } else if (event.target.value === "email") {
            setVerificationMethod(2)
        }

    }

    return (

        <FormContainer onSubmit={handleFormSubmit}>
            <FormWrapper>
                <InputFormWrapper>
                    <label>
                        Phone Number:
                        <InputWrapper type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder={"Enter your phone number"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Email:
                        <InputWrapper type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={"Enter your E-MAIL"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Name:
                        <InputWrapper type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder={"Enter your name"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Password:
                        <InputWrapper type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={"Enter your E-MAIL"} />
                    </label>
                </InputFormWrapper>


                <label>
                    Authorization method:

                    <select onChange={handleSelectChange}>
                        <option value="phone">Phone number</option>
                        <option value="email">E-Mail</option>
                    </select>

                </label>


                <label>
                    By clicking submit you are agreeing to the Terms and Conditions.
                    <SubmitButton type="submit" value="submit" />
                </label>
            </FormWrapper>


        </FormContainer>


    )
})


const FormContainer = styled("form")`
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans',sans-serif;
    color: #fff;
    background: linear-gradient(#141e30, #243b55);    
`

const FormWrapper = styled("div")`
    width: 400px;
    padding: 40px;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const InputFormWrapper = styled("div")`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  outline: none;
  background: transparent;
    
`
const InputWrapper = styled("input")`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`

const SubmitButton = styled("input")`
    background: linear-gradient(#243B6B, #8951e9);
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
