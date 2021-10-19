import * as React from "react"
import styled from "styled-components"
import {ReactComponent as Homesvg} from "../../assets/imgSide/iconhome.svg"
import {ReactComponent as Chatsvg} from "../../assets/imgSide/chaticon.svg"
import {ReactComponent as Callsvg} from "../../assets/imgSide/Callsvg.svg"
import {ReactComponent as Contactsvg} from "../../assets/imgSide/Contactsvg.svg"
import {ReactComponent as Optionsvg} from "../../assets/imgSide/Optionsvg.svg"
import {ReactComponent as Searchsvg} from "../../assets/imgNavbar/Searchicon.svg"
//import {ReactComponent as Asvg} from "./img/Asvg.svg"


export const Sidebar = () => {

    const ContactsIcon = [<Homesvg />, <Chatsvg />, <Callsvg />, <Contactsvg />, <Searchsvg />, <Optionsvg />]
    const RenderMediaIcon = ContactsIcon.map((RenderIconMedia) => <Li><BtnCon> {RenderIconMedia} </BtnCon></Li>)

    return (
        <Container>
            <BtnBox>
                <Logo><Homesvg /></Logo>
                <Ul>{RenderMediaIcon}</Ul>
            </BtnBox>
        </Container>


    )

}
const Logo = styled("div")`
  box-sizing: border-box;
  text-align: center;
`
const BtnCon = styled("div")`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  box-sizing: border-box;
`
const Li = styled("li")`
  box-sizing: border-box;
`
const Ul = styled("ul")`
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
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const BtnBox = styled("div")`
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
