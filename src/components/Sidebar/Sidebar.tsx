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
    return (
        <Wrapper>
            <Container>
                <Logo>
                    <Homesvg/>
                </Logo>
                <BtnBox>
                    <Ul>
                        <Homesvg />
                    </Ul>
                    <Ul>
                        <Chatsvg />
                    </Ul>
                    <Ul>
                        <Callsvg />
                    </Ul>
                    <Ul>
                        <Contactsvg />
                    </Ul>
                    <Ul>
                        <Searchsvg />
                    </Ul>
                    <Ul>
                        <Optionsvg/>
                    </Ul>
                </BtnBox>
            </Container>
            <Footer></Footer>
        </Wrapper>
    )

}


const Footer = styled("div")`
  flex: 1 0 auto;
  display: flex;
`
const Logo = styled("div")`
  display: flex;
  margin: 0 0 144px 0;
`
const Ul = styled("ul")`
  display: flex;
  padding-left: 0;
  flex-direction: column;
  padding-bottom: 80px;
  margin: 0;
`
const BtnBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 15px;
  width: 84px;
  min-height: 100%;
  flex: 1 0 auto;
`
const Wrapper = styled("div")`
  max-width: 100%;
  margin: 0px auto;
`
