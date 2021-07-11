import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Chats } from "./pages/Chats";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Chats} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
