// import React from 'react'
import { Link } from "react-router-dom";
import {Ticker} from 'react-ticker-tape'
import React, { Component } from 'react';


class Tick extends Component {
    render() {
        return (
            <div>
                <Ticker text='NIVEA - OROMO - ASAHI - SIEMENS - CLOUD - KLEYER' ><Link to="/Mini" className="linknexttext" style={{'font-size': '5em'}}>MINI SPORT </Link></Ticker>
            </div>
        );
    }
}

export default Tick;

// const Tick = () => (
    
//     <Ticker speed={10} direction="toRight">
//         {({ index }) => (
//             <section className='tick'>  
//                 <Link to="/Asahi" className="linknexttext" style={{'font-size': '5em'}}>ASAHI FOR RESIDENT ADVISOR       </Link>
//                 <Link to="/Mini" className="linknexttext" style={{'font-size': '5em'}}>MINI SPORT       </Link>
//                 <Link to="/Nivea" className="linknexttext" style={{'font-size': '5em'}}>NIVEA MEN       </Link>
//                 <Link to="/Oromo" className="linknexttext" style={{'font-size': '5em'}}>OROMO       </Link>
//                 <Link to="/Kleyer" className="linknexttext" style={{'font-size': '5em'}}>CLOUD KLEYER       </Link>
//             </section>
//         )}
//     </Ticker>
// )



// export default Tick

