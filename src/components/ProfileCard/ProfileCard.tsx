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
import {ReactComponent as MessageIcon} from "../../assets/imgCardProfile/MessageIcon.svg"

export const ProfileCard = () => {
    return (
        <CardProfile>
            <ProfileHead>
                <ProfileLogoDiv>
                    <ProfileLogo />
                </ProfileLogoDiv>
                <ProfileTitle>
                    <TitleProfile>Johanna Stevens</TitleProfile>
                    <BodyProfesion> UI/UX Designer</BodyProfesion>
                    <FrameProfileTitle>
                        <BtnProfileMssage>
                            <LinkProfileMessage>
                                <TextButtonProfileMessage>Message</TextButtonProfileMessage>
                                <ContainerMessageIcon>
                                    <MessageIcon />
                                </ContainerMessageIcon>
                            </LinkProfileMessage>
                        </BtnProfileMssage>
                    </FrameProfileTitle>
                </ProfileTitle>
                <ShareBtn>
                    <ShareBtnLink>
                        <ShareIcon />
                    </ShareBtnLink>
                </ShareBtn>
                <BtmMore>
                    <MoreIconDiv>
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
                        <GoogleIcon />
                    </IconBtn>
                </ContGoogleIcon>
                <ContPinIcon>
                    <IconBtn>
                        <PinIcon />
                    </IconBtn>
                </ContPinIcon>
                <ContTwIcon>
                    <IconBtn>
                        <TwIcon />
                    </IconBtn>
                </ContTwIcon>
                <ContInIcon>
                    <IconBtn>
                        <Inicon />
                    </IconBtn>
                </ContInIcon>
            </Social>
        </CardProfile>
    )
}

const TextDialMedia = styled("div")`
    font-size: 14px;
    color: #1a1c1d;
    order: 1;
    flex-grow: 1;
    margin: 0px 34px;
`
const FrameTextPhone = styled("p")`
    font-size: 14px;
    color: #1a1c1d
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
`
const FrameTextPhone1 = styled(FrameTextPhone)``
const FrameTextPhone2 = styled(FrameTextPhone)``
const FrameBlockPhone = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 208.5px;
`
const IconBtn = styled("button")`
    background: #ffffff;
    wight: 40px;
    order: 5;
    align-self: center;
    flex-grow: 0;
    margin: 10px 11.8px;
    border: none;
    outline: none;
`
const BtnSocialMedia = styled("div")`
    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    align-self: center;
    flex-grow: 0;
    margin: 0px 5px;
`
const ContInIcon = styled(BtnSocialMedia)`
    order: 5;
    margin-right: 22%;
`
const ContPinIcon = styled(BtnSocialMedia)`
    order: 3;
`
const ContTwIcon = styled(BtnSocialMedia)`
    order: 2;
`
const ContGoogleIcon = styled(BtnSocialMedia)`
    order: 1;
`
// * * Style profile head
const ProfileHead = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`
const ProfileLogoDiv = styled("div")`
    width: 114px;
    height: 114px;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
`
const ProfileTitle = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 12.3333px;
`

const TitleProfile = styled("p")`
    font-weight: bold;
    font-size: 20px;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 11px 0px;
`
const BodyProfesion = styled("p")`
    font-size: 14px;
    line-height: 21px;
    color: #8083a3;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
`

const FrameProfileTitle = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 11px 0px;
`

const BtnProfileMssage = styled("button")`
    background: #6b59cc;
    border-radius: 10px;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0px 6px;
    border: 0;

`

const LinkProfileMessage = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
`

const TextButtonProfileMessage = styled("div")`
    height: 19px;
    font-family: system-ui;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    order: 1;
    flex-grow: 0;
    margin: 0px 6px;
    padding: 2px;
`

const ContainerMessageIcon = styled("div")`
    width: 18px;
    height: 18px;
    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;

    text-align: center;

    color: #fafbff;
    order: 0;
    flex-grow: 0;
    margin: 0px 6px;
`
// * * Btn Profile head Share
// Button share
const ShareBtn = styled("div")`
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    order: 4;
    align-self: center;
    flex-grow: 0;
    padding: 1.2%;
`

const ShareBtnLink = styled("div")`
    order: 2;
    flex-grow: 0;
    margin: 0px 12.3333px;
`
// Button more
const BtmMore = styled("div")`
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    order: 4;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
    padding: 1.5%;
`
const MoreIconDiv = styled("div")`
    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #8083a3;
`
// Button Phone
const BtnPhone = styled("div")`
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;
    order: 3;
    align-self: center;
    flex-grow: 0;
    margin: 0px 12.3333px;
    padding: 1.5%;
`
const MoreBtnPhone = styled("div")`
    font-family: Material Icons;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #8083a3;
    padding: 0.9%;
`
// * * Bio frame
const Bio = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 67px;
    order: 1;
    align-self: stretch;
    margin: 15px 0px;
`
// bio container
const FrameBio = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 23px 0px;
`
// bio text
const FrameBioText = styled("p")`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    color: #1a1c1d;

    order: 1;
    flex-grow: 0;
    margin: 0px 35.8515px;
`
// * * Email line
const Email = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
// text Email
const TextSocialMedia = styled("p")`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    color: #8083a3;

    order: 0;
    flex-grow: 1;
    margin: 0px 34px;
`
// frame Email Text
const FrameEmailText = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;

    order: 1;
    align-self: stretch;
    flex-grow: 1;
    margin: 0px 158.5px;
`
// text Email
const TextEmail = styled("p")`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    color: #1a1c1d;

    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 5px 0px;
`
const TextinFrameEmail1 = styled(TextEmail)``
const TextinFrameEmail2 = styled(TextEmail)`
    order: 1;
`
// * * Dial frame
const Dial = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

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

    order: 5;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;
`
const Social = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

    position: absolute;
    width: 639px;
    height: 600px;
    left: 504px;
    top: 50px;
`
