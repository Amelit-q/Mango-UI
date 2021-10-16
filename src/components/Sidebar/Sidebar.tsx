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
        <Container>
            <Logo>
                <Homesvg>

                </Homesvg>
            </Logo>
            <BtnBox>
                <Home>
                    <Homesvg>

                    </Homesvg>
                </Home>
                <Chat>
                    <Chatsvg>

                    </Chatsvg>
                </Chat>
                <Call>
                    <Callsvg>

                    </Callsvg>
                </Call>
                <Contact>
                    <Contactsvg>

                    </Contactsvg>
                </Contact>
                <Search>
                    <Searchsvg>

                    </Searchsvg>
                </Search>
                <Opon>
                    <Optionsvg>

                    </Optionsvg>
                </Opon>
                <Footer>

                </Footer>
            </BtnBox>
        </Container>
    )

}

const Logo = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 0px;
`
const Footer = styled("div")`
  min-height: calc(20vh - 80px);
`
const Opon = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 672px;
`
const Search = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 384px;
`
const Contact = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 288px;
`
const Call = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 192px;

`
const Chat = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 96px;
`
const Home = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 20px 25px 25px;

  position: static;
  height: 50px;
  left: 0%;
  right: 0%;
  top: 0px;
`
const BtnBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 110px 0px 0px 0px;
  position: static;
  height: 150%;
`
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5px 0px 0px;

  position: static;
  width: 84px;
  height: 100%;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
`
