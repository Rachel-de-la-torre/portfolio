import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'; 
import {mini1} from '../assets/assetsImport';
import {mini2} from '../assets/assetsImport';

export default class Mini extends Component {
    render() {
        return (
            <section class='project1'>
                <div className='project-head'>
                    <h1>MINI</h1>
                    <h2>Media Design and branded social assets for the digital campain "Open more doors." Mini Sport.</h2>
                    <a href="/protected">SEE PROJECT</a>
                </div>
                <div className='container-fluids' >  
                    <Carousel>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={mini1} />  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={mini2}   />  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}} >  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={ mini1 } />  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  
            </section>
        )
    }
}
