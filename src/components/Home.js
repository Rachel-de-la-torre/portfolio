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
import Motion from './Motion';



function Home() {
  return (
    <div>
        <section class='homeLoad'>
          <Loading />
        </section>
          <Kleyer />
          <Mini />
          <Nivea />
          <Oromo />
          <Webdev />
    </div>


  );
}

export default Home;