import * as React from "react"
import styled from "styled-components"
import {ReactComponent as Homesvg} from "../../assets/imgSide/iconhome.svg"
import {ReactComponent as Chatsvg} from "../../assets/imgSide/chaticon.svg"
import {ReactComponent as Callsvg} from "../../assets/imgSide/Callsvg.svg"
import {ReactComponent as Contactsvg} from "../../assets/imgSide/Contactsvg.svg"
import {ReactComponent as Optionsvg} from "../../assets/imgSide/Optionsvg.svg"
//import {ReactComponent as Asvg} from "./img/Asvg.svg"


export const Sidebar = () => {
    return (
        <NavBarContainer>
            <AContainer>
                <APicture>
                </APicture>
            </AContainer>
            <LinkContainer>
                <HomeContainer>
                    <HomePicture>
                        <Homesvg />
                    </HomePicture>
                </HomeContainer>
                <ChatContainer>
                    <ChatPicture>
                        <Chatsvg />
                    </ChatPicture>
                </ChatContainer>
                <CallContainer>
                    <CallPicture>
                        <Callsvg />
                    </CallPicture>
                </CallContainer>
                <ContactContainer>
                    <ContactPicture>
                        <Contactsvg />
                    </ContactPicture>
                </ContactContainer>
                <OptionContainer>
                    <OptionPicture>
                        <Optionsvg />
                    </OptionPicture>
                </OptionContainer>
            </LinkContainer>
            <LineOne></LineOne>
        </NavBarContainer>
    )
}

const LineOne = styled("div")`
  display: inline-block;
  position: absolute;
  left: 83px;
  height: 100%;
  border: 1px solid #ECEEF5;
  box-sizing: border-box;

`

const APicture = styled("div")`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #28b463;
  border-radius: 14px;
`

const AContainer = styled("div")`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 22px;
  top: 22px;
`

const OptionContainer = styled("div")`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 313px;

`

const OptionPicture = styled("div")`
  position: absolute;
  height: 22px;
  left: 36.9%;
  right: 36.9%;
  top: calc(50% - 22px / 2);

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #8083A3;
`

const ContactPicture = styled("div")`
  position: absolute;
  width: 22px;
  height: 22px;
  left: calc(50% - 22px / 2);
  top: calc(50% - 22px / 2);

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #28b463;

`

const ContactContainer = styled("div")`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 241px;

`

const CallPicture = styled("div")`
  position: absolute;
  height: 22px;
  left: 36.9%;
  right: 36.9%;
  top: calc(50% - 22px / 2);

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #8083A3;
`

const CallContainer = styled("div")`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 169px;
`

const ChatPicture = styled("div")`
  position: absolute;
  height: 22px;
  left: 36.9%;
  right: 36.9%;
  top: calc(50% - 22px / 2);

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #8083A3;
`

const ChatContainer = styled("div")`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 97px;

`

const NavBarContainer = styled("nav")`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;

`

const LinkContainer = styled("div")`
  position: absolute;
  width: 84px;
  height: 576px;
  left: 0px;
  top: 181px;
`

const HomePicture = styled("div")`
  position: absolute;
  height: 22px;
  left: 36.9%;
  right: 36.9%;
  top: calc(50% - 22px / 2);
  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #8083A3;
`

const HomeContainer = styled("div")`
  position: absolute;
  height: 72px;
  left: 0%;
  right: 0%;
  top: 25px;
`
