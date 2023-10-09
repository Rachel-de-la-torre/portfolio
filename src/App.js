import React from 'react';
import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import KleyerPage from './components/KleyerPage';
import OromoPage from './components/OromoPage';
import AsahiPage from './components/AsahiPage';
import NiveaPage from './components/NiveaPage';
import MiniPage from './components/MiniPage';
import AllProj from './components/AllProj';
import Dev from './components/Dev';
import Tick from './components/Tick';
import Work from './components/Work';
import Reel from './components/Reel';


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
    <Home />
    <div className="content">
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/klyer" component={KleyerPage} />
        <Route exact path="/oromo" component={OromoPage} />
        <Route exact path="/asahi" component={AsahiPage} />
        <Route exact path="/nivea" component={NiveaPage} />
        <Route exact path="/mini" component={MiniPage} />
        <Route exact path="/Dev" component={Dev} />
        <Route exact path="/AllProjects" component={AllProj} />
        <Route exact path="/links" component={Tick} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/Reel" component={Reel} />
      </Routes>
    </div>
   </BrowserRouter>
   </div>
 );
 }
}

export default App;