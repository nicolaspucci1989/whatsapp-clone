import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <h1>home</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
