import React from 'react';
import {Asahi, asahivid, TOOLCSS, TOOLVUE, TOOLJS, TOOLHTML} from '../assets/assetsImport';
// import ReactPlayer from 'react-player'

export default function AsahiPage() {
    return (
        <div>
         {
            window.scrollTo(0, 0)
          }
            <div className='ProjAboutText'>
            <h1 class="title2" >Asahi - Discover Tokyo</h1>
                    <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={Asahi} />
             <a className="nameWeighta" href="https://www.youtube.com/watch?v=rxy8xVKQ6D0&t=1s&ab_channel=ClubQu">OUTCOME</a>
            <br />
            <div class='p-icon'>
                <img class="p-icon-solo" src={TOOLHTML} />
                <img class="p-icon-solo" src={TOOLVUE} />
                <img class="p-icon-solo" src={TOOLCSS} />
                <img class="p-icon-solo" src={TOOLJS} />
            </div>
            <p class="nameWeight">Agency: Club Qu</p>
            <a className="nameWeight" target="_blank" href="https://www.youtube.com/watch?v=rxy8xVKQ6D0&t=1s&ab_channel=ClubQu" rel="noreferrer">PRODUCT</a> <br />
            <p className="textwidth"> The Discover Tokyo Virtual Experience is the world’s first 360 degree, surround-sound virtual journey
            through Tokyo. Brought to you by Asahi Super Dry and Resident Advisor, powered by Club Qu. This 
            45 minute experience, developed using Off-World and Spatial Audio technology was soundtracked by original 
            music composed by 3 world-class electronic music artists.
            </p>
            {/* <div className='playerwrapper'>
                <ReactPlayer 
                url= {asahivid}
                loop = {true}
                playing = {true}
                width = "100vw"
                height = "100vh"
                />
            </div> */}

            <p className="textwidth" >I worked with a team of designers (Stuio IOR50) and game engine developers to realize the virtual club experience.
            As the lead front-end developer on the project I took user interface design layouts from Studio IOR50 and developed them into fully interactive web pages, using React, that worked seamlessly on both desktop and mobile to bring the virtual clubbing experience to life.
            </p>
        </div>
        </div>
    )
}
