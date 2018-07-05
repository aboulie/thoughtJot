import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
    <div >
       <Navbar /> 
<Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
</Router>
</div>
    );
  }
}

export default App;
