import * as React from "react"
import styled from "styled-components"
import {LoginForm} from "../LoginForm/LoginForm"
import {Container} from "../../pages/Registration"
// import {UsersStore} from "../../stores/UsersStore"

export const Navbar = () => {

    // const usersStore = new UsersStore()

    const [registerPopupVisible, setRegisterPopupVisible] = React.useState(false)

    // console.log(usersStore.getUsers())


    const handleLoginButtonClick = () => {
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

const LoginWrapper = styled("div")`
  display: flex;
  justify-content: center;
`

