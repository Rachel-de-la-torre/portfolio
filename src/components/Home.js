import React from 'react';
import '../App.scss';
import Projects from './Projects';
import { Link } from "react-router-dom";
import Loading from './Loading';
import Kleyer from './Kleyer';
import Mini from './Mini';
import Nivea from './Nivea';
import Oromo from './Oromo';
import Webdev from './Webdev';
import Navbar from './Navbar';
import Motion from './Motion';



function Home() {
  return (
    <div>
      <div>
        <section class='homeLoad'>
          <Loading />
        </section>
        <section class='project1'>
          <h1>Motion</h1>
          <h2>Motion graphics and postproductoin for comercials advertising and brand identity</h2>
          <a href="https://www.cloudkleyer.de/">SEE PROJECT</a>
          <Motion />
        </section>
        <section class='project1'>
          <h1>CLOUD KLEYER</h1>
          <h2>UX & UI design of this cloud data storage product.</h2>
          <a href="https://www.cloudkleyer.de/">SEE PROJECT</a>
          <Kleyer />
        </section>
        <section class='project1'>
          <h1>MINI</h1>
          <h2>Media Design and branded social assets for the digital campain "Open more doors." Mini Sport.</h2>
          <Link to="./ProtectedContent.js">SEE PROJECT</Link>
          <Mini />
        </section>
        <section class='project1'>
          <h1>NIVEA</h1>
          <h2>Media Design and branded social assets for the digital campain of Nivea sensitive man stubble balm.</h2>
          <Link to="./ProtectedContent.js">SEE PROJECT</Link>
          <Nivea />
        </section>
        <section class='project1'>
          <h1>OROMO</h1>
          <h2>I developed the wireframe, UX/ UI for the website and shop, for this subscription based coffee service.</h2>
          <a href="https://oromo.coffee/">SEE PROJECT</a>
          <Oromo />
        </section>
        <section class='project1'>
          <Webdev />
        </section>
        <section class="Navigation">
      <Navbar />
      </section>
      </div>
    </div>


  );
}

export default Home;