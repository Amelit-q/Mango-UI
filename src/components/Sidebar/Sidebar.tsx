import * as React from "react"
import styled from "styled-components"
import {ReactComponent as Homesvg} from "../../assets/imgSide/iconhome.svg"
import {ReactComponent as Chatsvg} from "../../assets/imgSide/chaticon.svg"
import {ReactComponent as Callsvg} from "../../assets/imgSide/Callsvg.svg"
import {ReactComponent as Contactsvg} from "../../assets/imgSide/Contactsvg.svg"
import {ReactComponent as Optionsvg} from "../../assets/imgSide/Optionsvg.svg"
import {ReactComponent as Searchsvg} from "../../assets/imgNavbar/Searchicon.svg"

export const Sidebar = () => {
    const ContactsIcon = [<Homesvg />, <Chatsvg />, <Callsvg />, <Contactsvg />, <Searchsvg />, <Optionsvg />]

    return (
        <Container>
            <ButtonsWrapper>
                <Logo>
                    <Homesvg />
                </Logo>
                <StyledUl>
                    {ContactsIcon.map((item, key) => (
                        <StyledLi key={key}>
                            <StyledButton>{item}</StyledButton>
                        </StyledLi>
                    ))}
                </StyledUl>
            </ButtonsWrapper>
        </Container>
    )
}
const Logo = styled("div")`
    box-sizing: border-box;
    text-align: center;
`
const StyledButton = styled("div")`
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    box-sizing: border-box;
`
const StyledLi = styled("li")`
    box-sizing: border-box;
`
const StyledUl = styled("ul")`
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    box-sizing: border-box;
`
const Container = styled("div")`
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`
const ButtonsWrapper = styled("div")`
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    order: 0;
    overflow-y: auto;
    overflow-x: hidden;
    width: 5rem;
    text-align: center;
`
