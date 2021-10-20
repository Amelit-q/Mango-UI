import * as React from "react"
import styled from "styled-components"
import {ReactComponent as GoogleIcon} from "../../assets/imgCardProfile/googleIcon.svg"
import {ReactComponent as PinIcon} from "../../assets/imgCardProfile/pinIcon.svg"
import {ReactComponent as TwIcon} from "../../assets/imgCardProfile/twIcon.svg"
import {ReactComponent as Inicon} from "../../assets/imgCardProfile/inicon.svg"
import {ReactComponent as IconButtonmore} from "../../assets/imgCardProfile/IconButtonmore.svg"
import {ReactComponent as PhoneIcon} from "../../assets/imgCardProfile/PhoneIcon.svg"
import {ReactComponent as ShareIcon} from "../../assets/imgCardProfile/ShareIcon.svg"
import {ReactComponent as ProfileLogo} from "../../assets/imgCardProfile/ProfileLogo.svg"
import {ReactComponent as MessageIcon} from "../../assets/imgCardProfile/MessageIcon.svg"

export const ProfileCard = () => {
    // *  Icon Media
    const contactIcons = [<GoogleIcon />, <PinIcon />, <TwIcon />, <Inicon />]
    // *  User Phone Number
    const userPhoneNumber = ["0 991-123329", "0 222-123329"]
    // *  User Email
    const userEmail = ["johanna.stevens@gmail.com", "johanna.stevens@whiteui.store"]
    // *  Head Icon Phone, Share, More
    const iconHeadProfile = [<ShareIcon />, <IconButtonmore />, <PhoneIcon />]
    return (
        <CardProfile>
            <ProfileHead>
                <ProfileLogoDiv>
                    <ProfileLogo />
                </ProfileLogoDiv>
                <ProfileTitle>
                    <TitleProfile>Johanna Stevens</TitleProfile>
                    <BodyProfesion> UI/UX Designer</BodyProfesion>
                    <LinkProfileMessage>
                        <ContainerMessageIcon>
                            <MessageIcon />
                        </ContainerMessageIcon>
                        <HeadProfileText>
                            <TextButtonProfileMessage>Message</TextButtonProfileMessage>
                        </HeadProfileText>
                    </LinkProfileMessage>
                </ProfileTitle>
                {iconHeadProfile.map((RenderProfileIcon) => (
                    <HeadButtonProfile>
                        <ButtonHeadProfile>{RenderProfileIcon}</ButtonHeadProfile>
                    </HeadButtonProfile>
                ))}
            </ProfileHead>
            <Bio>
                <FrameBio>
                    <FrameBioText>When I first got into the advertising, I was looking for the magical combination that would put website into the top search engine rankings</FrameBioText>
                </FrameBio>
            </Bio>
            <Email>
                <ContainerTextSocial>
                    <TextSocilaMedia> Email </TextSocilaMedia>
                </ContainerTextSocial>
                <FrameEmailText>
                    {userEmail.map((RenderUserEmail) => (
                        <TextEmail>{RenderUserEmail} </TextEmail>
                    ))}
                </FrameEmailText>
            </Email>
            <Dial>
                <TextSocilaMedia> Dial </TextSocilaMedia>
                <TextDialMedia>j.stevens@ymsg.com</TextDialMedia>
            </Dial>
            <Meeting>
                <ContainerTextSocial>
                    <TextSocilaMedia> Meeting </TextSocilaMedia>{" "}
                </ContainerTextSocial>

                <TextDialMedia>http://go.betacall.com/meet/j.stevens</TextDialMedia>
            </Meeting>
            <Phone>
                <FrameBlockPhone>
                    {userPhoneNumber.map((RenderUserPhoneNumber) => (
                        <FrameTextPhone>{RenderUserPhoneNumber} </FrameTextPhone>
                    ))}
                </FrameBlockPhone>
                <ContainerTextSocial>
                    <TextSocilaMedia> Phone </TextSocilaMedia>
                </ContainerTextSocial>
            </Phone>
            <Social>
                <ContainerTextSocial>
                    <TextSocilaMedia> Social </TextSocilaMedia>
                </ContainerTextSocial>
                {contactIcons.map((RenderIconMedia) => (
                    <ButtonSocialMedia> {RenderIconMedia} </ButtonSocialMedia>
                ))}
            </Social>
        </CardProfile>
    )
}
const HeadProfileText = styled("div")`
    align-self: center;
    order: 0;
    margin: 0 0.4rem;
`
const DisplayFlexDirectionRow = styled("div")`
    display: flex;
    flex-direction: row;
    margin: 0.9em 0;

`
const ContainerTextSocial = styled("div")``
const TextDialMedia = styled("div")`
    font-size: 0.9em;
    color: #1a1c1d;
    order: 1;
    flex-grow: 1;
`
const FrameTextPhone = styled("p")`
    font-size: 0.9em;
    color: #1a1c1d
    order: 0;
    align-self: stretch;
    margin: 0;
`

const FrameBlockPhone = styled("div")`
    display: flex;
    flex-direction: column;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
    padding: 1em;
`

const ButtonSocialMedia = styled("div")`
    background: #ffffff;
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;

    align-self: center;
    margin: 0 2%;
    padding: 2%;
`
// * * Style profile head
const ProfileHead = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: flex-end;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`
const ProfileLogoDiv = styled("div")`
    width: 7em;
    height: 7em;
    order: 0;
    align-self: center;
    flex-grow: 0;
    margin: 0 5%;
`
const ProfileTitle = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0;
`

const TitleProfile = styled("p")`
    font-weight: bold;
    font-size: 1.5em;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0;
`
const BodyProfesion = styled("p")`
    font-size: 1em;
    color: #8083a3;
    order: 1;
    margin: 1rem 0;
`

const LinkProfileMessage = styled("button")`
    display: flex;
    justify-content: space-between;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    padding: 2%;
    background: #6b59cc;
    border-radius: 10px;
    order: 2;
    align-self: initial;
    margin: 0;
    border: 0;
`

const TextButtonProfileMessage = styled("p")`
    font-family: system-ui;
    font-weight: bold;
    font-size: 1.2em;
    color: #ffffff;
    margin: 0.4rem;
`

const ContainerMessageIcon = styled("div")`
    align-self: center;
    width: 1.2em;
    height: 1.2em;
    color: #fafbff;
    order: 0;
    margin: 0 0.4rem;
`
// * * Button Profile head Share
// Button share
const BorderButtonHead = styled("div")`
    border: 1px solid #eceef5;
    box-sizing: border-box;
    border-radius: 10px;
`
const ButtonHeadProfile = styled("div")``
// Button more
const HeadButtonProfile = styled(BorderButtonHead)`
    display: flex;
    order: 4;
    align-self: center;
    flex-grow: 0;
    margin: 0 2%;
    padding: 1.8%;
`
// * * Bio frame
const Bio = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 3em;
    order: 1;
    align-self: stretch;
    margin: 1em 0;
`
// bio container
const FrameBio = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: flex-start;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 1em 0;
`
// bio text
const FrameBioText = styled("p")`
    font-family: Lato;
    font-size: 1em;
    line-height: 1.5em;

    color: #1a1c1d;

    order: 1;
    flex-grow: 0;
    margin: 0 2em;
`
// * * Email line
const Email = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: center;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 1em 0;
`
// text Email
const TextSocilaMedia = styled("p")`
    font-family: Lato;
    font-size: 1em;
    line-height: 1.2em;
    color: #8083a3;
    margin: 0 2em;
`
// frame Email Text
const FrameEmailText = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
`
// text Email
const TextEmail = styled(TextSocilaMedia)`
    color: #000;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0.5em 0;
`
// * * Dial frame
const Dial = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: center;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
`
const Meeting = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: center;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
`
const Phone = styled(DisplayFlexDirectionRow)`
    justify-content: space-between;
    align-items: center;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
`
const Social = styled(DisplayFlexDirectionRow)`
    align-items: center;
    order: 6;
    align-self: stretch;
    flex-grow: 0;
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