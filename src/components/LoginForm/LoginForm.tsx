import * as React from "react"
import {AuthStore} from "../../stores/AuthStore"
import {LoginCommand} from "../../types/Auth/Requests/LoginCommand"
import {
    AtBut,
    Body,
    CheckBox, Container, Footer,
    Form,
    FormContent,
    FormFogot,
    FormGroup,
    FormHeader,
    FormHeaderH1,
    FormInput,
    FormLabel,
    FormRecovery,
    FormRemember,
    FormToggle,
    FormWindow, Icon,
    Knopka,
    Wrapper,
} from "../../pages/Registration"


export const LoginForm: React.FunctionComponent = () => {

    const authStore = new AuthStore()

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        authStore.login(new LoginCommand(email, password))
        //window.location.reload()
    }
    return (
        <Container>
            <Wrapper>
                <Body>
                    <Form>
                        <FormWindow>
                            <FormHeader>
                                <FormHeaderH1>Account Login</FormHeaderH1>
                            </FormHeader>
                            <FormContent>
                                <FormLabel>Username</FormLabel>
                            </FormContent>
                            <FormInput></FormInput>
                            <FormGroup>
                                <FormContent>
                                    <FormLabel>Password</FormLabel>
                                </FormContent>
                                <FormInput></FormInput>
                            </FormGroup>
                            <FormGroup>
                                <FormRemember>
                                    <CheckBox></CheckBox>
                                    Remember Me </FormRemember>
                                <FormRecovery>
                                    <FormFogot>Forgot Password?</FormFogot>
                                </FormRecovery>
                            </FormGroup>
                            <FormGroup>
                                <Knopka value="submit">LOG IN</Knopka>
                            </FormGroup>
                            <FormToggle></FormToggle>
                        </FormWindow>
                    </Form>
                    <AtBut>
                        <Icon></Icon>
                    </AtBut>
                    <Footer></Footer>
                </Body>
            </Wrapper>
        </Container>

    )
}



