import * as React from "react"
import styled from "styled-components"
import {ReactComponent as Menusvg} from "../../assets/imgMenu/Menu.svg"
import {ReactComponent as S1} from "../../assets/imgMenu/s1.svg"
import {ReactComponent as S2} from "../../assets/imgMenu/s2.svg"
import {ReactComponent as S3} from "../../assets/imgMenu/s3.svg"
import {ReactComponent as S4} from "../../assets/imgMenu/s4.svg"
import {ReactComponent as S5} from "../../assets/imgMenu/s5.svg"


export const Header = () => {
    return (
        <Container>
            <Boxmenu>
                <Bg>
                    <Iconmenu>
                        <Icon>
                            <Menusvg>

                            </Menusvg>
                        </Icon>
                    </Iconmenu>
                </Bg>
            </Boxmenu>
            <Contact>Contacts</Contact>

            <Button>
                <Bg>
                    <Icon>
                        <S1></S1>
                    </Icon>
                </Bg>
            </Button>
            <Button2>
                <Bg>
                    <Icon>
                        <S2></S2>
                    </Icon>
                </Bg>
            </Button2>

            <Button3>
                <Bg>
                    <Icon>
                        <S3></S3>
                    </Icon>
                </Bg>
            </Button3>

            <Button4>
                <Bg>
                    <Icon>
                        <S4></S4>
                    </Icon>
                </Bg>
            </Button4>
            <Ava>
                <S5></S5>
            </Ava>
        </Container>


    )
}

const Ava = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 1169px;
  top: 22px;
  border-radius: 8px;

`

const Button4 = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 1160px;
  top: 22px;
`

const Button3 = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 1153px;
  top: 21px;
  border-radius: 0px;
`


const Button2 = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 440px;
  top: 21px;
  border-radius: 0px;
`

const Button = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 432px;
  top: 21px;
  border-radius: 0px;
`

const Contact = styled("div")`
  position: relative;
  width: 81px;
  height: 32px;
  left: 120px;
  top: calc(50% - 32px / 2 - 1.24px);

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  /* identical to box height, or 160% */


  color: #1A1C1D;
`

const Icon = styled("div")`
  position: relative;
  width: 18px;
  height: 18px;
  left: calc(50% - 18px / 2);
  top: calc(50% - 18px / 2);

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;

  color: #8083A3;
`

const Bg = styled("div")`
  position: relative;
  height: 40px;
  width: 40px;
  left: 3px;

  border-radius: 10px;

  background: #FFFFFF;
  border: 1px solid #ECEEF5;
  box-sizing: border-box;
`

const Iconmenu = styled("div")`
  position: relative;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 10px;

  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  color: #8083A3;
`
const Boxmenu = styled("div")`
  position: relative;
  width: 40px;
  height: 40px;
  left: 100px;
  top: calc(50% - 40px / 2);
`


const Container = styled("div")`
  display: flex;
  flex-direction: row;
  height: 84px;
  weight: 100%;
  left: 84px;
  top: 0px;
  border-radius: 0px;

`
