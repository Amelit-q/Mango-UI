import * as React from "react"
import {LoginForm} from "../LoginForm/LoginForm"
import styled from "styled-components"
import {UsersStore} from "../../stores/UsersStore"

export const Navbar = () => {

    const usersStore = new UsersStore()

    const [registerPopupVisible, setRegisterPopupVisible] = React.useState(false)

    // console.log(usersStore.getUsers())



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
            <div>12342</div>
            <div>12342</div>
            <div>12342</div>
            <div>12342</div>
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
