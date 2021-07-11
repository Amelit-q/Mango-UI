import React from "react";
import {Switch, Route} from "react-router-dom"
import {Profile} from "./pages/Profile";

function App() {
    return <Switch>
        <Route exact path="/profile" component={Profile}/>
    </Switch>
}

export default App;
