import React, { useEffect} from 'react';
import {Ae, CK1, Sketch, CK2, Ai} from '../assets/assetsImport';
import lottie from "lottie-web";

export default function KleyerPage() {
    return (
        <div className='projbkg' >
        <div className='ProjAboutText'>
            {
                window.scrollTo(0, 0)
            }
            <h1 class="nameWeight">Cloudkleyer</h1>

                <img style={{'objectFit': 'scale-down'}}  className="d-block w-100"  src={CK1} />
                <br />
                <div class='p-icon'>
                    <img class="p-icon-solo" src={Sketch} />
                    <img class="p-icon-solo" src={Ae} />
                    <img class="p-icon-solo" src={Ai} />
                </div>
                <p class="nameWeight">Agency: W11 Network</p>
                <a className="nameWeighta" target="_blank" href="https://www.cloudkleyer.de/" rel="noreferrer">WEBSITE OUTCOME</a> <br />
            <p className="textwidth">
            Cloud Kleyer provides cyber security, IT services, and cloud storage.
            Because the client offers a range of services, the challenge was to design 
            a logo animation and website that could convey a clear story about the full 
            range of services offered. I worked closely with a team of designers to 
            design the UX & UI of this project.
            </p>
            {/* <p class="nameWeight">My Solution:</p> */}
            <p className="textwidth" >The first step of my endeavor was to research the company and its clients 
            in order to determine the needs of the project, an easy way to find a data 
            package that met the specific requirements of the client. Once the client's 
            needs were determined, we moved into the wireframe phase, followed by prototypes 
            and user testing. Once the user flow was established, we integrated the CI and 
            interactivity design, including buttons, artifacts, and motion graphics. </p>
                    <img style={{'objectFit': 'scale-down'}} className="d-block w-100" src={CK2}   />
        </div>
        </div>
    )
}
