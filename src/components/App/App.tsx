import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Messenger} from "../Messenger/Messenger"
import {Registration} from "../../pages/Registration"
import {Main} from "../../pages/Main"
import {Verification} from "../../pages/Verification"
import {Sidebar} from "../Sidebar/Sidebar"
import {Navbar} from "../Navbar/Navbar"
import {Header} from "../Header/Header"


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Messenger} />
                    <Route exact path="/main" component={Main} />
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/verification" component={Verification} />
                    <Route exact path="/sidebar" component={Sidebar} />
                    <Route exact path="/navbar" component={Navbar} />
                    <Route exact path="/header" component={Header} />
                </Switch>
            </BrowserRouter>

        </div>
    )
}
