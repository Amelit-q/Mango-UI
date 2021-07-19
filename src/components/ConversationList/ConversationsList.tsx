import React, {useEffect, useState} from "react"
import {Toolbar} from "../Toolbar/Toolbar"
import {ToolbarButton} from "../ToolbarButton/ToolbarButton"
import {ConversationSearch} from "../ConversationSearch/ConversationSearch"
import axios from "axios"

import "./ConversationList.css"
import {ConversationListItem} from "../ConversationListItem/ConversationListItem"

export const ConversationsList = (props: any) => {
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        getConversations()
    }, [])

    const getConversations = () => {
        axios.get("https://randomuser.me/api/?results=20").then((response) => {
            let newConversations = response.data.results.map((result: any) => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: "Hello world! This is a long message that needs to be truncated.",
                }
            })
            // @ts-ignore
            setConversations([...conversations, ...newConversations])
        })
    }


    return (
        <div className="conversation-list">
            <Toolbar
                title="Messenger"
                leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
                rightItems={[
                    <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />,
                ]}
            />
            <ConversationSearch />
            {conversations.map((conversation: any) => (
                <ConversationListItem key={conversation.name} data={conversation} />
            ))}
        </div>
    )
}