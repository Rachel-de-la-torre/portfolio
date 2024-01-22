import {minivid1, mini1, mini2, Ai, Pr, Ae} from '../assets/assetsImport';
import React from 'react';
import ReactPlayer from 'react-player'

export default function MiniPage() {
    return (
        <div className='projbkg'>
            <div className='ProjAboutText'>
            {
                window.scrollTo(0, 0)
            }
                <h1 class="nameWeight">MINI</h1>
                <img style={{'objectFit': 'scale-down'}}  className="d-block w-100"  src={mini1} />  

                    <div class='p-icon'>
                        <img class="p-icon-solo" src={Ai} />
                        <img class="p-icon-solo" src={Pr} />
                        <img class="p-icon-solo" src={Ae} />
                    </div>
                    <p class="nameWeight">Agency: KKLD*</p>
                    {/* <p class="nameWeight">The Brief:</p> */}
                    <p className="textwidth"> The “Open more doors“ digital campaign was a social media campaign promoting the MINI CLUBMAN model.</p>
                    {/* <p class="nameWeight">My Solution:</p>  */}
                    <p className="textwidth">Together with the designers at the agency using MINI's CI I created a series of animated assets as 
                    targeted ads for a social media campaign. My starting point was a series of PDFs consisting of 
                    static images and copy. My role in this project was to use the existing video stock and visual 
                    guidelines to interpret the mood boards and develop the animation.
                    </p>

                    <div className='playerwrapper'>
                    <ReactPlayer 
                    url= {minivid1}
                    loop = {true}
                    playing = {true}
                    width = "100vw"
                    height = "100vh"
                    />
                    </div>  
            </div>
        </div>
    )
}
