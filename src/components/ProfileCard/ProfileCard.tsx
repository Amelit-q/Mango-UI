import * as React from "react"
import styled from "styled-components"
import {ReactComponent as GoogleIcon} from "../../assets/imgCardProfile/googleIcon.svg"
import {ReactComponent as PinIcon} from "../../assets/imgCardProfile/pinIcon.svg"
import {ReactComponent as TwIcon} from "../../assets/imgCardProfile/twIcon.svg"
import {ReactComponent as Inicon} from "../../assets/imgCardProfile/inicon.svg"
import {ReactComponent as Iconbtnmore} from "../../assets/imgCardProfile/Iconbtnmore.svg"
import {ReactComponent as PhoneIcon} from "../../assets/imgCardProfile/PhoneIcon.svg"
import {ReactComponent as ShareIcon} from "../../assets/imgCardProfile/ShareIcon.svg"
import {ReactComponent as ProfileLogo} from "../../assets/imgCardProfile/ProfileLogo.svg"
export const ProfileCard = () => {
    return (
        <CardProfile>
            <ProfileHead>
                <ProfileLogoDiv>
                    {" "}
                    <ProfileLogo />
                </ProfileLogoDiv>
                <ProfileTitle>
                    <TitleProfile>Johanna Stevens</TitleProfile>
                    <BodyProfesion> UI/UX Designer</BodyProfesion>
                    <FrameProfileTitle>
                        <BtnProfileMssage>
                            <LinkProfileMessage>
                                <TextButtonProfileMessage>Message</TextButtonProfileMessage>
                            </LinkProfileMessage>
                        </BtnProfileMssage>
                    </FrameProfileTitle>
                </ProfileTitle>
                {/* */}
                <ShareBtn>
                    <ShareBtnLink>
                        <ShareIcon />
                    </ShareBtnLink>
                </ShareBtn>
                <BtmMore>
                    <MoreIconDiv>
                        {" "}
                        <Iconbtnmore />
                    </MoreIconDiv>
                </BtmMore>
                <BtnPhone>
                    <MoreBtnPhone>
                        <PhoneIcon />
                    </MoreBtnPhone>
                </BtnPhone>
            </ProfileHead>
            <Bio>
                <FrameBio>
                    <FrameBioText>
                        When I first got into the advertising, <br /> I was looking for the magical combination that would put website into the top search engine rankings{" "}
                    </FrameBioText>
                </FrameBio>
            </Bio>
            <Email>
                <TextSocialMedia> Email </TextSocialMedia>
                <FrameEmailText>
                    <TextinFrameEmail1> johanna.stevens@gmail.com</TextinFrameEmail1>
                    <TextinFrameEmail2> johanna.stevens@whiteui.store</TextinFrameEmail2>
                </FrameEmailText>
            </Email>
            <Dial>
                <TextSocialMedia> Dial </TextSocialMedia>
                <TextDialMedia>j.stevens@ymsg.com</TextDialMedia>
            </Dial>
            <Meeting>
                <TextSocialMedia> Meeting </TextSocialMedia>
                <TextDialMedia>http://go.betacall.com/meet/j.stevens</TextDialMedia>
            </Meeting>
            <Phone>
                <FrameBlockPhone>
                    <FrameTextPhone1> 0 991-123329 </FrameTextPhone1>
                    <FrameTextPhone2> 0 991-123329 </FrameTextPhone2>
                </FrameBlockPhone>
                <TextSocialMedia> Phone </TextSocialMedia>
            </Phone>
            <Social>
                <TextSocialMedia> Social </TextSocialMedia>
                <ContGoogleIcon>
                    <IconBtn>
                        <IconStyleBtn>
                            <GoogleIcon />
                        </IconStyleBtn>
                    </IconBtn>
                </ContGoogleIcon>
                <ContPinIcon>
                    <IconBtn>
                        <IconStyleBtn>
                            <PinIcon />
                        </IconStyleBtn>
                    </IconBtn>
                </ContPinIcon>
                <ContTwIcon>
                    <IconBtn>
                        <IconStyleBtn>
                            <TwIcon />
                        </IconStyleBtn>
                    </IconBtn>
                </ContTwIcon>
                <ContInIcon>
                    <IconBtn>
                        <IconStyleBtn>
                            <Inicon />
                        </IconStyleBtn>
                    </IconBtn>
                </ContInIcon>
            </Social>
        </CardProfile>
    )
}
const ProfileLogoDiv = styled("div")`
    position: static;
    width: 114px;
    height: 114px;
    left: 0px;
    top: 0.5px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
`
const LinkProfileMessage = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: absolute;
    left: 18px;
    right: 17px;
    top: 25.21%;
    bottom: 29.55%;
`
const TextButtonProfileMessage = styled("div")`
    position: static;
    height: 19px;
    left: 27.59%;
    right: 0%;
    top: calc(50% - 19px / 2);

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
`
const BtnProfileMssage = styled("div")`
    position: static;
    left: 14.12%;
    right: 14.12%;
    top: 0%;
    bottom: 0%;

    background: #6b59cc;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0px 6px;
`
const FrameProfileTitle = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: static;
    width: 170px;
    height: 42px;
    left: 0px;
    top: 73px;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 11px 0px;
`
const BodyProfesion = styled("p")`
    position: static;
    width: 170px;
    height: 21px;
    left: 0px;
    top: calc(50% - 21px / 2 - 6px);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #8083a3;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 11px 0px;
`
const TitleProfile = styled("p")`
    position: static;
    height: 32px;
    left: 0%;
    right: 0%;
    top: calc(50% - 32px / 2 - 43.5px);

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 11px 0px;
`
const ProfileTitle = styled("div")`
    /* Auto Layout */

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;

    position: static;
    width: 170px;
    height: 115px;
    left: 171.25px;
    top: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 12.3333px;
`
const ShareBtnLink = styled("div")`
    position: static;
    left: 62.36%;
    right: 31.06%;
    top: 63.48%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 12.3333px;
`
const ShareBtn = styled("div")`
    position: static;
    left: 93.43%;
    right: 0%;
    top: 31.74%;
    bottom: 31.74%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 4;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
    padding: 0.9%;
`
const MoreBtnPhone = styled("div")`
    position: initial;
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

    color: #8083a3;
    padding: 0.9%;
`
const BtnPhone = styled("div")`
    position: static;
    left: 77.9%;
    right: 15.53%;
    top: 31.74%;
    bottom: 31.74%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 3;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
    padding: 0.9%;
`
const MoreIconDiv = styled("div")`
    position: initial;
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

    color: #8083a3;
`

const BtmMore = styled("div")`
    position: static;
    left: 93.43%;
    right: 0%;
    top: 31.74%;
    bottom: 31.74%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 4;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
    padding: 0.9%;
`
const FrameEmailText = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 212px;
    height: 56px;
    left: 192.5px;
    top: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 158.5px;
`
const TextinFrameEmail1 = styled("p")`
    position: static;
    height: 21px;
    left: 0%;
    right: 0%;
    top: calc(50% - 21px / 2 - 17.5px);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
`
const TextinFrameEmail2 = styled("p")`
    position: static;
    height: 21px;
    left: 0%;
    right: 0%;
    top: calc(50% - 21px / 2 - 17.5px);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`
const FrameBioText = styled("p")`
    position: static;
    height: 42px;
    left: 0%;
    right: 0%;
    top: calc(50% - 42px / 2);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 35.8515px;
`
const FrameBio = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 639px;
    height: 42px;
    left: 0px;
    top: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 23px 0px;
`
const TextDialMedia = styled("div")`
    position: static;
    height: 21px;
    left: 30.36%;
    right: 0%;
    top: calc(50% - 21px / 2);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 0px 34px;
`
const FrameTextPhone1 = styled("p")`
    position: static;
    height: 21px;
    left: 0%;
    right: 0%;
    top: calc(50% - 21px / 2 - 17.5px);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
`
const FrameTextPhone2 = styled(FrameTextPhone1)`
    position: static;
    height: 21px;
    left: 0%;
    right: 0%;
    top: calc(50% - 21px / 2 - 17.5px);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #1a1c1d;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`
const FrameBlockPhone = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 106px;
    height: 56px;
    left: 248.5px;
    top: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 208.5px;
`
const IconStyleBtn = styled("div")`
    position: static;
    width: 16px;
    height: 16px;
    left: calc(50% - 16px / 2);
    top: calc(50% - 16px / 2);
`
const IconBtn = styled("button")`
    position: static;
    left: 93.74%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */
    wight: 40px;
    flex: none;
    order: 5;
    align-self: center;
    flex-grow: 0;
    margin: 10px 11.8px;
    border: none;
    outline: none;
`
const ContInIcon = styled("div")`
    position: static;
    left: 93.74%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 5;
    align-self: center;
    flex-grow: 0;
    margin: 0px 11.8px;
    margin-right: 25%;
`

const ContPinIcon = styled("div")`
    position: static;
    left: 77.53%;
    right: 16.21%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 3;
    align-self: center;
    flex-grow: 0;
    margin: 0px 11.8px;
`
const ContTwIcon = styled("div")`
    wight: 40px;

    position: static;
    left: 69.42%;
    right: 24.32%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    align-self: center;
    flex-grow: 0;
    margin: 10px 11.8px;
`
const ContGoogleIcon = styled("div")`
    position: static;
    left: 61.31%;
    right: 32.43%;
    top: 0%;
    bottom: 0%;

    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: center;
    flex-grow: 0;
    margin: 0px 11.8px;
`
const ProfileHead = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;

    position: static;
    width: 639px;
    height: 115px;
    left: calc(50% - 639px / 2);
    top: 0px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 0px;
`
const Bio = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: static;
    width: 639px;
    height: 67px;
    left: calc(50% - 639px / 2);
    top: 143px;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const Email = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 639px;
    height: 56px;
    left: calc(50% - 639px / 2);
    top: 238px;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const Dial = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: static;
    width: 639px;
    height: 21px;
    left: calc(50% - 639px / 2);
    top: 322px;

    /* Inside Auto Layout */

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const Meeting = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: static;
    width: 639px;
    height: 21px;
    left: calc(50% - 639px / 2);
    top: 371px;

    /* Inside Auto Layout */

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const Phone = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 639px;
    height: 56px;
    left: calc(50% - 639px / 2);
    top: 420px;

    /* Inside Auto Layout */

    flex: none;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const TextSocialMedia = styled("p")`
    position: static;
    height: 21px;
    left: 0%;
    right: 74.96%;
    top: calc(50% - 21px / 2);

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    color: #8083a3;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 34px;
`
const Social = styled("div")`
    /* Social */

    /* Auto Layout */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: static;
    width: 639px;
    height: 40px;
    left: calc(50% - 639px / 2);
    top: 504px;

    /* Inside Auto Layout */

    flex: none;
    order: 6;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const CardProfile = styled("div")`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 639px;
    height: 600px;
    left: 694px;
    top: 50px;
`
