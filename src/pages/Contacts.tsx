import * as React from "react"
import {ProfileCard} from "../components/ProfileCard/ProfileCard"
import {Sidebar} from "../../src/components/Sidebar/Sidebar"
import styled from "styled-components"

export const Contacts: React.FunctionComponent = () => {

    return (
        <Container>
            <Sidebar />
            <ProfileCard/>
        </Container>
    )
}
const Container = styled("div")`
display: flex;

`
