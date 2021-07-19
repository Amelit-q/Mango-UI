import React from "react"
import {ConversationsList} from "../ConversationList/ConversationsList"
import {MessageList} from "../MessageList/MessageList"

import "./Messenger.css"

export const Messenger = (props: any) => {
    return (
        <div className="messenger">
            {/* <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        /> */}

            {/* <Toolbar
          title="Conversation Title"
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        /> */}

            <div className="scrollable sidebar">
                <ConversationsList />
            </div>

            <div className="scrollable content">
                <MessageList />
            </div>
        </div>
    )
}
