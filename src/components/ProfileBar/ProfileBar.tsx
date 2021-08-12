import * as React from "react"
import {LoginForm} from "../LoginForm/LoginForm"
import styled from "styled-components"

export const Navbar = () => {
    const [registerPopupVisible, setRegisterPopupVisible] = React.useState(false)

    const handleLoginButtonClick = (event: any) => {
        setRegisterPopupVisible(true)
    }

    return (
        <Container>
            <button
                onClick={handleLoginButtonClick}
                onDoubleClick={() => {
                    setRegisterPopupVisible(false)
                }}
            >
                Login
            </button>
            <LoginWrapper>{registerPopupVisible && <LoginForm />}</LoginWrapper>
        </Container>
    )
}

const Container = styled("div")`
    display: flex;
    flex-direction: column;
`
const LoginWrapper = styled("div")`
    display: flex;
    justify-content: center;
`
