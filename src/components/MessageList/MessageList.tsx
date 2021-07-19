import React, {useEffect, useState} from "react"
import {Toolbar} from "../Toolbar/Toolbar"
import {ToolbarButton} from "../ToolbarButton/ToolbarButton"
import {Message} from "../Message/Message"
import moment from "moment"

import "./MessageList.css"
import {Compose} from "../Compose/Compose"

const MY_USER_ID = "apple"

export const MessageList = (props: any) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = () => {
        var tempMessages = [
            {
                id: 1,
                author: "apple",
                message:
                    "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime(),
            },
            {
                id: 2,
                author: "orange",
                message:
                    "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime(),
            },
            {
                id: 3,
                author: "orange",
                message:
                    "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime(),
            },
            {
                id: 4,
                author: "apple",
                message:
                    "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime(),
            },
            {
                id: 5,
                author: "apple",
                message:
                    "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime(),
            },
            {
                id: 6,
                author: "apple",
                message:
                    "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime(),
            },
            {
                id: 7,
                author: "orange",
                message:
                    "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime(),
            },
            {
                id: 8,
                author: "orange",
                message:
                    "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime(),
            },
            {
                id: 9,
                author: "apple",
                message:
                    "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
                timestamp: new Date().getTime(),
            },
            {
                id: 10,
                author: "orange",
                message:
                    "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
                timestamp: new Date().getTime(),
            },
        ]
        // @ts-ignore
        setMessages([...messages, ...tempMessages])
    }

    const renderMessages = () => {
        let i = 0
        let messageCount = messages.length
        let tempMessages = []

        while (i < messageCount) {
            let previous = messages[i - 1]
            let current = messages[i]
            let next = messages[i + 1]
            // @ts-ignore
            let isMine = current.author === MY_USER_ID
            // @ts-ignore
            let currentMoment = moment(current.timestamp)
            let prevBySameAuthor = false
            let nextBySameAuthor = false
            let startsSequence = true
            let endsSequence = true
            let showTimestamp = true

            if (previous) {
                // @ts-ignore
                let previousMoment = moment(previous.timestamp)
                let previousDuration = moment.duration(
                    currentMoment.diff(previousMoment),
                )
                // @ts-ignore
                prevBySameAuthor = previous.author === current.author

                if (prevBySameAuthor && previousDuration.as("hours") < 1) {
                    startsSequence = false
                }

                if (previousDuration.as("hours") < 1) {
                    showTimestamp = false
                }
            }

            if (next) {
                // @ts-ignore
                let nextMoment = moment(next.timestamp)
                let nextDuration = moment.duration(nextMoment.diff(currentMoment))
                // @ts-ignore
                nextBySameAuthor = next.author === current.author

                if (nextBySameAuthor && nextDuration.as("hours") < 1) {
                    endsSequence = false
                }
            }

            tempMessages.push(
                <Message
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                />,
            )

            // Proceed to the next message.
            i += 1
        }

        return tempMessages
    }

    return (
        <div className="message-list">
            <Toolbar
                title="Conversation Title"
                rightItems={[
                    <ToolbarButton
                        key="info"
                        icon="ion-ios-information-circle-outline"
                    />,
                    <ToolbarButton key="video" icon="ion-ios-videocam" />,
                    <ToolbarButton key="phone" icon="ion-ios-call" />,
                ]}
            />

            <div className="message-list-container">{renderMessages()}</div>

            <Compose
                rightItems={[
                    <ToolbarButton key="photo" icon="ion-ios-camera" />,
                    <ToolbarButton key="image" icon="ion-ios-image" />,
                    <ToolbarButton key="audio" icon="ion-ios-mic" />,
                    <ToolbarButton key="money" icon="ion-ios-card" />,
                    <ToolbarButton key="games" icon="ion-logo-game-controller-b" />,
                    <ToolbarButton key="emoji" icon="ion-ios-happy" />,
                ]}
            />
        </div>
    )
}