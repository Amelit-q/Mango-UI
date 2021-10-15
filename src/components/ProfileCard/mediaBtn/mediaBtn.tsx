import * as React from "react"
import styled from "styled-components"
import GoogleIcon from "../../../assets/imgCardProfile/googleIcon.svg"
import PinIcon from "../../../assets/imgCardProfile/pinIcon.svg"
import TwIcon from "../../../assets/imgCardProfile/twIcon.svg"
import Inicon from '../../../assets/imgCardProfile/inicon.svg'
export const BtnMedia = () => {
    const comIcon: any = [GoogleIcon, PinIcon, TwIcon, Inicon]
    return (
        <DivBtnimg>
            {comIcon.map((urls: any) => (
                <ButtonMedia>
                    <ImgBtn src={` ${urls}`} />
                </ButtonMedia>
            ))}
        </DivBtnimg>
    )
}

const DivBtnimg = styled('div')`
display: flex;
pading: 5%;
`
const ButtonMedia = styled("div")`
padding-left: 5%;
height: 5%`
const ImgBtn = styled("img")``
