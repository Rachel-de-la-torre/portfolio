import React from 'react';
import ReactPlayer from 'react-player'
import {niv1,  niv2, NIVV1, NIVV2, NIVV3, NIVV4, Ae, Pr, Ai} from '../assets/assetsImport';

export default function NiveaPage() {
    return (
        <div className='projbkg'>
            <div className='ProjAboutText' style={{'margin-bottom':"10rem"}}>
                <h1 class="nameWeight">Nivea Men</h1>
                        <img style={{'objectFit': 'scale-down'}}  className="d-block w-100"  src={niv1} />
                {/* <a href="https://vimeo.com/video/368765804">LINK TO BTS</a>  */}
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

                {/* <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {NIVV1}
                        loop = {true}
                        playing = {true}
                        muted
                        paddingBottom = "3%"
                        width = "35vw"
                        />
                    </div>   */}
                    <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {NIVV3}
                        loop = {true}
                        playing = {true}
                        muted
                        paddingBottom = "3%"
                        width = "35vw"
                        />
                    </div>  
<br></br>
                <p className="textwidth">I created 57 unique video assets as a motion graphics and video editor on this campaign, which included 15, 30 and 90 second cut downs of commercials that worked across Instagram stories, carousels, and YouTube.
                </p>
                <img style={{'objectFit': 'scale-down'}} className="d-block w-100" src={niv2}   />
                <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {NIVV4}
                        loop = {true}
                        playing = {true}
                        muted
                        paddingBottom = "3%"
                        width = "35vw"
                        />
                    </div>  
                    <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {NIVV2}
                        loop = {true}
                        playing = {true}
                        muted
                        paddingBottom = "3%"
                        width = "35vw"
                        />
                    </div>  

                {/* <img style={{'height':"100vh"}, {'width':'100vw'}}  className="d-block w-100"  src={niv2} />  */}
                {/* <h2 class="nameWeight">Customer Journey:</h2>
                <h3>This vimeo link displays the
                customer journey. My role was in asset creation.</h3>
                <a className="linknexttext" href="https://vimeo.com/video/368765804">Video</a>  */}
            </div>
        </div>
    )
}
