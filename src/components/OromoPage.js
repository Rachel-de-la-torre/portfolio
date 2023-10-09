import React, { useEffect } from 'react';
import {oro1, oro2, oro3, Sketch, Ae, Ai, O_Logo} from '../assets/assetsImport';
import lottie from "lottie-web";

export default function OromoPage() {
    {
        window.scrollTo(0, 0)
      }
    useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#O_Logo"),
      animationData: O_Logo,
    });
  }, []);

    return (
        <div className='ProjAboutText'>
        {
            window.scrollTo(0, 0)
          }
            <h1 class="nameWeight">Oromo</h1>
                    <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro1} />  
            <a className="linknexttext" href="https://oromo.coffee/">LINK TO PROJECT</a> 
            <br /> 
            <div class='p-icon'>
                <img class="p-icon-solo" src={Sketch} />
                <img class="p-icon-solo" src={Ae} />
                <img class="p-icon-solo" src={Ai} />
            </div>
            <p class="nameWeight">Agency: W11 Network</p>
            <a className="nameWeighta" target="_blank" href="https://oromo.coffee/" rel="noreferrer">OUTCOME</a> <br/>
            {/* <p class="nameWeight">The Brief:</p> */}
            <p className="textwidth"> Oromo is a subscription
            based coffee service that allows you to create
            your own individual coffee experience based on
            bean strength, frequency, and preferred brewing
            method.
            </p>
            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={oro2}   />  
            {/* <p class="nameWeight">My Solution:</p>   */}
            <p className="textwidth">It was my responsibility to design the user interface, logo animation, 
            and the user journey for the selection process by which the audience could 
            create their ideal coffee profile.
            </p>
            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro3} />   
            <p className="textwidth">Part of the challenge in the design was connecting the individual 
            coffee profile with the checkout on a subscription basis. This included user routes 
            connected to the selection process.</p>  
             <div id="O_Logo" style={{ width: "90%", margin: "0 auto"}}/>
            
        </div>
    )
}

