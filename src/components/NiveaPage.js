import React from 'react';
import {niv1,  niv2, Ae, Pr, Ai} from '../assets/assetsImport';

export default function NiveaPage() {
    return (
        <div>
             {/* {
            window.scrollTo(0, 0)
          }
         */}
        <div className='ProjAboutText' style={{'margin-bottom':"10rem"}}>
            <h1 class="nameWeight">Nivea Men</h1>
                    <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={niv1} />
            <a className="linknexttext" href="https://vimeo.com/video/368765804">LINK TO PROJECT</a> 
            <br />
            <div class='p-icon'>
                <img class="p-icon-solo" src={Ai} />
                <img class="p-icon-solo" src={Pr} />
                <img class="p-icon-solo" src={Ae} />
            </div>
            <p class="nameWeight">Agency: KKLD*</p>
            <p className="textwidth">“The world is ready for you, sensitive man“ was a digital campaign to promote the
            Nivea Men Sensitive Man Stubble Balm.
            </p>

            <p className="textwidth">I created 57 unique video assets as a motion graphics and video editor on this campaign, which included 15, 30 and 90 second cut downs of commercials that worked across Instagram stories, carousels, and YouTube.
            </p>
            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={niv2}   />


            {/* <img style={{'height':"100vh"}, {'width':'100vw'}}  className="d-block w-100"  src={niv2} />  */}
            {/* <h2 class="nameWeight">Customer Journey:</h2>
            <h3>This vimeo link displays the
            customer journey. My role was in asset creation.</h3>
            <a className="linknexttext" href="https://vimeo.com/video/368765804">Video</a>  */}
        </div>
        </div>
    )
}
