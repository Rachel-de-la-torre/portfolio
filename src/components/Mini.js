import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'; 
import {mini1} from '../assets/assetsImport';
import {mini2} from '../assets/assetsImport';

export default class Mini extends Component {
    render() {
        return (
            <div>
                <div>  
                    <div className='container-fluids' >  
                        <Carousel>  
                            <Carousel.Item style={{'height':"100vh"}}>  
                                <img style={{'height':"100%"}}  className="d-block w-100"  src={mini1} />  
                                <Carousel.Caption>  
                                    <h3>Second Demo</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                            <Carousel.Item style={{'height':"100vh"}}>  
                                <img style={{'height':"100%"}} className="d-block w-100" src={mini2}   />  
                                <Carousel.Caption>  
                                    <h3>Third Demo</h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                            <Carousel.Item style={{'height':"100vh"}} >  
                                <img style={{'height':"100%"}}  className="d-block w-100"  src={ mini1 } />  
                                <Carousel.Caption>  
                                    <h3>First Demo </h3>  
                                </Carousel.Caption>  
                            </Carousel.Item>  
                        </Carousel>  
                    </div>  
                </div>  
            </div>
        )
    }
}
