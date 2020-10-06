import React from 'react';
import '../App.scss';
import Projects from './Projects';
// import { Link } from "react-router-dom";
import Loading from './Loading';
import Kleyer from './projects/Kleyer';
import Mini from './projects/Mini';
import Nivea from './projects/Nivea';
import Oromo from './projects/Oromo';
import Webdev from './projects/Webdev';



function Home() {
  return (
    <div class='homeAll'>
      <section class='homeLoad'>
        <Loading />
      </section>
      <section class='project1'>
        <Kleyer />
      </section>
      {/* <section class='project2'>
        <Mini />
      </section>
      <section class='project3'>
        <Nivea />
      </section>
      <section class='project4'>
        <Oromo />
      </section>
      <section class='project5'>
        <Webdev />
      </section> */}
      
      {/* <section className="homeProjects">
      <Projects/>
      </section> */}
    </div>

  );
}

export default Home;