import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Messenger} from "../Messenger/Messenger"
import {Registration} from "../../pages/Registration"
import {Main} from "../../pages/Main"
import {Verification} from "../../pages/Verification"
import {LoginForm} from "../LoginForm/LoginForm"


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/verification" component={Verification} />
                    {/*TODO: DELETE LOGIN TEST COMP TASK */}
                    <Route exact path="/login-test" component={LoginForm} />

                </Switch>
            </BrowserRouter>

        </div>
    )
}
