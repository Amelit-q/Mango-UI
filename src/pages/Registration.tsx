import * as React from "react"
import {observer} from "mobx-react-lite"

import styled from "styled-components"
import {VerificationMethod} from "../types/Auth/Enums/VerificationMethod"
import {RegisterCommand} from "../types/Auth/Requests/RegisterCommand"
import {AuthStore} from "../stores/AuthStore"


export const Registration: React.FunctionComponent = observer(() => {
    const authStore = new AuthStore()


    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [termsAccepted, setTermsAccepted] = React.useState(true)
    const [verificationMethod, setVerificationMethod] = React.useState<VerificationMethod>(1)

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        setTermsAccepted(true)
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
                        <InputWrapper type="e-mail" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={"Enter your E-MAIL"} />
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
                        <InputWrapper type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={"Enter your password"} />
                    </label>
                </InputFormWrapper>


                <label style={{margin: "0 0 15px 0"}}>
                    Authorization method:

                    <SelectWrapper onChange={handleSelectChange}>
                        <option value="phone">Phone number</option>
                        <option value="email">E-Mail</option>
                    </SelectWrapper>

                </label>


                <label>
                    By clicking submit you are agreeing to the Terms and Conditions.
                    <SubmitButton type="submit" value="submit" />
                </label>
            </FormWrapper>


        </FormContainer>


    )
})


const FormContainer = styled("div")`
  height: 100vh;
  width: 100vw;
  font-family: 'Open Sans', sans-serif;
  color: black;
  background: linear-gradient(#6bff18, #FF1493);
  display: flex;
  justify-content: center;
`

export const FormWrapper = styled("form")`

`

export const InputFormWrapper = styled("div")`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #FF1493;
  margin-bottom: 30px;
  border: none;
  outline: none;
  background: transparent;
`
export const InputWrapper = styled("input")`
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

export const SelectWrapper = styled("select")`
`
export const Icon = styled("i")`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga'
`

export const AtBut = styled("a")`
  z-index: 10000000;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #FFF;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 100%;
  box-sizing: border-box;
  color: #666;
  -webkit-animation: at-ripple 0.6s linear infinite;
  animation: at-ripple 0.6s linear infinite;
`

export const Knopka = styled("button")`
  outline: none;
  background: #4285F4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #FFFFFF;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
`

export const FormFogot = styled("a")`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-size: inherit;
  vertical-align: baseline;
`

export const FormRecovery = styled("div")`
  color: #4285F4;
  font-size: 12px;
  text-decoration: none;
`

export const CheckBox = styled("input")`
  display: inline-block;
  width: 8px;
  height: 10px;
  margin: 0 10px 0 0;
`

export const FormRemember = styled("label")`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
`
export const FormInput = styled("input")`
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
`


export const FormLabel = styled("label")`
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`

export const FormContent = styled("div")`
  margin: 10px 0px 0px 0px;
  padding: 0px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  flex: 1 0 auto;
`

export const FormHeader = styled("div")`
  margin: 0 0 40px;
  flex: 0 0 auto;
`
export const FormHeaderH1 = styled("h1")`
  padding: 4px 0;
  color: #4285F4;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`
export const FormToggle = styled("div")`
  z-index: 10;
  position: absolute;
  top: 60px;
  right: 60px;
  background: green;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  transform-origin: center;
  transform: translate(0, -25%) scale(0);
  opacity: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after, before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 4px;
    background: #4285F4;
    transform: translate(-50%, -50%);
  }
`
export const Form = styled("div")`
  z-index: 15;
  position: relative;
  background: #FFFFFF;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
`

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Body = styled("body")`
  background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 1.6em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const Footer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin: 5.11%;
  flex: 0 0 auto;
`

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

export const FormWindow = styled("div")`
  padding: 60px calc(5% + 60px) 60px 60px;
  box-sizing: border-box;
`

export const FormGroup = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;

  &:last-child {
    margin: 0;
  }
`
