import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Registration} from "../pages/Registration/Registration"
import {Messenger} from "../Messenger/Messenger"

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger} />
                    <Route exact path="/registration" component={Registration} />

                </Switch>
            </BrowserRouter>

        </div>
    )
}
