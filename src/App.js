import React from 'react';
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import KleyerPage from './components/KleyerPage';
import OromoPage from './components/OromoPage';
import AsahiPage from './components/AsahiPage';
import NiveaPage from './components/NiveaPage';
import MiniPage from './components/MiniPage';
import Tick from './components/Tick';
import Reel from './components/Reel';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/asahi" element={<AsahiPage />} />
          <Route path="/cloud-klyer" element={<KleyerPage />} />
          <Route path="/oromo" element={<OromoPage  />} />
          <Route path="/asahi" element={<AsahiPage  />} />
          <Route path="/nivea" element={<NiveaPage />} />
          <Route path="/mini" element={<MiniPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App



// class App extends React.Component {

//   render() {
//    return (
//     <div className="app">
//     <BrowserRouter>
//     <Navbar />
//     <Home />
//     <div className="content">
//       <Routes>
//         <Route exact path="/home" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/cloud-klyer" component={KleyerPage} />
//         <Route exact path="/oromo" component={OromoPage} />
//         <Route exact path="/asahi" component={AsahiPage} />
//         <Route exact path="/nivea" component={NiveaPage} />
//         <Route exact path="/mini" component={MiniPage} />
//         <Route exact path="/Dev" component={Dev} />
//         <Route exact path="/AllProjects" component={AllProj} />
//         <Route exact path="/links" component={Tick} />
//         <Route exact path="/work" component={Work} />
//         <Route exact path="/Reel" component={Reel} />
//       </Routes>
//     </div>
//    </BrowserRouter>
//    </div>
//  );
//  }
// }

// export default App;