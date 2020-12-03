import React from 'react';
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Navbar from './components/Navbar.js';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Protect from './components/ProtectedContent';

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
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} /> 
          <Route exact path="/protected" component={Protect} />      
        </Switch>
     </BrowserRouter>
     </div>
   );
 }
}

export default App;