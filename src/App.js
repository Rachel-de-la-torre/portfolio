import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Navbar from './components/Navbar.js';
import Works from './components/Works'

class App extends React.Component {
  state = {
    user: this.props.user,
  };
  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    console.log("app user", this.state.user)
   return (
     <div className="app">
     <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/works" component={Works} />
        </Switch>
     </BrowserRouter>
     </div>
   );
 }
}

export default App;