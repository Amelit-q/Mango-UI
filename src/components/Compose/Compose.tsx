import React from "react"
import "./Compose.css"

export const Compose = (props: any) => {
    return (
        <div className="compose">
            <input
                type="text"
                className="compose-input"
                placeholder="Type a message, @name"
            />

            {props.rightItems}
        </div>
    )
}
