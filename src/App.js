import React from 'react';
import "./App.scss";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Navbar from './components/Navbar.js';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
// import BootstrapCarousel from './BootstrapCarousel';
import Mini from './components/Mini';
// // import { Projects } from "./components/Projects";
// import Kleyer from './components/projects/Kleyer';
// import ProjectDetail from './components/ProjectDetail';
// import $ from "jquery";


// import ProjectDetail from './components/ProjectDetail';

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
        </Switch>
     </BrowserRouter>
     </div>
   );
 }
}

export default App;