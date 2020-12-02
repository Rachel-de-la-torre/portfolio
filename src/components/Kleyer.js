import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import {CK1} from '../assets/assetsImport';
import {CK2} from '../assets/assetsImport';
// import { Link } from "react-router-dom";
// import { CK } from '../assets/assetsImport';

// export default class Kleyer extends Component {
//     render() {
//         return (
//             <div class='projectCard'>
//                 <div class='CardCloudK'>
//                     <h1>CLOUD KLEYER</h1>
//                     <h2>UX & UI Design for a cloud-based data storage product.</h2>
//                     <a href="https://www.cloudkleyer.de/de/">SEE PROJECT</a>
//                 </div>
//                 {/* <img class='bannerImg' src={ CK } alt='Cloud Kleyer' /> */}
//             </div>
//         )
//     }
// }

export default class Kleyer extends Component {
    render() {
        return (
            <div>
                <div className='container-fluids' >  
                    <Carousel>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={CK1} />  
                            <Carousel.Caption>  
                                <h3>Second Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={CK2}   />  
                            <Carousel.Caption>  
                                <h3>Third Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  
            </div>
        )
    }
}
