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
import SiemensPage from './components/SiemensPage';
// import Reel from './components/Reel';
import AllProj from './components/AllProj';
import {Ticker} from 'react-ticker-tape'


function App() {
  return (
    <section className='ultraBKG'>
      <BrowserRouter>
      <section style={{ position: 'relative', zIndex: '1' }}>
      <Ticker bg="blue" color="white" fix="bottom" animationSpeed="20" text='HIRE ME!' />
      {/* <Ticker fix="bottom" animationSpeed="20" text="I'M EMPLOYABLE!" /> */}
      <Ticker fix="left" animationSpeed="20" text="!" />
      <Ticker bg="#dcfd1c" color="black" fix="right" animationSpeed="20" text="DREAM TEAM" />
      <Navbar />
      </section>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/asahi" element={<AsahiPage />} />
          <Route path="/cloud-klyer" element={<KleyerPage />} />
          <Route path="/oromo" element={<OromoPage  />} />
          <Route path="/asahi" element={<AsahiPage  />} />
          <Route path="/nivea" element={<NiveaPage />} />
          <Route path="/mini" element={<MiniPage />} />
          <Route path="/siemens" element={<SiemensPage />} />
          <Route path="/AllProjects" element={<AllProj />} />
        </Routes>
    </BrowserRouter>
    </section>
  );
}

export default App
