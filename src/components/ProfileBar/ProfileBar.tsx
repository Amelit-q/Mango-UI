import * as React from "react"
import {LoginForm} from "../LoginForm/LoginForm"
import styled from "styled-components"

export const Navbar = () => {

    const [registerPopupVisible, setRegisterPopupVisible] = React.useState(false)

    const handleLoginButtonClick = (event: any) => {
        setRegisterPopupVisible(true)
    }


    return <Container>
        <button onClick={handleLoginButtonClick}>Login</button>
        {registerPopupVisible && <LoginForm />}
        <div>asdfsadf</div>
        <div>asdfsadf</div>
        <div>asdfsadf</div>
        <div>asdfsadf</div>
        <div>asdfsadf</div>
        <div>asdfsadf</div>
        <div>asdfsadf</div>
    </Container>

}

const Container = styled("div")`
display: flex;
flex-direction: column;
`
