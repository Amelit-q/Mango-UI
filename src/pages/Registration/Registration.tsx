import React from "react"
import {observer} from "mobx-react-lite"
import {AuthStore} from "../../stores/AuthStore"
import styled from "styled-components"
import {VerificationMethod} from "../../types/Auth/Enums/VerificationMethod"

export const Registration: React.FunctionComponent = observer(() => {
    const authStore = new AuthStore()

    const [phoneNumber, setPhoneNumber] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [termsAccepted, setTermsAccepted] = React.useState(false)
    const [verificationMethod, setVerificationMethod] = React.useState<VerificationMethod>(1)
    console.log(verificationMethod, "verification method")

    const handleFormSubmit = (event: any) => {
        event.preventDefault()
        setTermsAccepted(true)
        console.log(verificationMethod, "this is the value of verification method: 1 means by telephone, 2 means by e-mail")
        // authStore.registration(new RegisterCommand(phoneNumber, email, name, password, verificationMethod, termsAccepted))
    }

    return (

        <FormContainer onSubmit={handleFormSubmit}>
            <FormWrapper>
                <InputFormWrapper>
                    <label>
                        Phone Number:
                        <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder={"Enter your phone number"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={"Enter your E-MAIL"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder={"Enter your name"} />
                    </label>
                </InputFormWrapper>

                <InputFormWrapper>
                    <label>
                        Password:
                        <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder={"Enter your E-MAIL"} />
                    </label>
                </InputFormWrapper>


                {/*<label>*/}
                {/*    Authorization method:*/}
                {/*    <input type="button" value="By phone number" onClick={() => setVerificationMethod(1)} />*/}
                {/*    <input type="button" value="By E-Mail" onClick={() => setVerificationMethod(2)} />*/}
                {/*</label>*/}


                {/*<label>*/}
                {/*    By clicking submit you are agreeing to the Terms and Conditions.*/}
                {/*    <input type="submit" value="submit" />*/}
                {/*</label>*/}
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const FormWrapper = styled("div")`
    
`

const InputFormWrapper = styled("div")`
    width: 400px;
    padding: 40px;
    background: rgba(0,0,0,.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
    
`


