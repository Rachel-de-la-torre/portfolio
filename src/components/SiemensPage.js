import React, { Component } from 'react';
import { Sie1, Ai, Pr, Ae } from '../assets/assetsImport';


export default function SiemensPage () {
    return (
        
        <div className='projbkg'>
            <div className='ProjAboutText'>
                { window.scrollTo(0, 0)}
                <h1 class="title2" >Siemens Microgrid Management Initiative</h1>
                        <img style={{'objectFit': 'scale-down'}}  className="d-block w-100"  src={Sie1} />
                <br />
                <div class='p-icon'>
                        <img class="p-icon-solo" src={Ai} />
                        <img class="p-icon-solo" src={Pr} />
                        <img class="p-icon-solo" src={Ae} />
                </div>
                <p class="nameWeight">Agency: Tigerbites</p>
                <p className="textwidth"> Our collaboration with Siemens on the Microgrid Management Initiative through the agency TigerBites marks a creative journey aimed at bringing innovation to the forefront of sustainable energy solutions. As the designated illustrator and animator, I played a pivotal role in transforming conceptual ideas into visually stunning assets that found their home within various campaigns and, prominently, on Siemens' official website. In partnership with TigerBites, we synergized ideas and expertise, aligning with Siemens' objectives and creative identity guidelines. Navigating through diverse campaigns, we contributed assets that enriched visual appeal and effectively conveyed Siemens' commitment to sustainable energy practices.
                </p>
                <p className="textwidth" >Website Integration:
Many of these assets seamlessly became integral components of Siemens' Microgrid Management Initiative on their official website. From dynamic animations illustrating complex processes to visually engaging designs capturing the initiative's essence, each asset strategically enhanced the overall user experience.</p>
                {/* <p className="textwidth" >I worked with a team of designers (Stuio IOR50) and game engine developers to realize the virtual club experience.
                As the lead front-end developer on the project I took user interface design layouts from Studio IOR50 and developed them into fully interactive web pages, using React, that worked seamlessly on both desktop and mobile to bring the virtual clubbing experience to life.
                </p> */}
            </div>
        </div>
    )
}