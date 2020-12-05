import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'; 
import {niv1} from '../assets/assetsImport';
import {niv2} from '../assets/assetsImport';


export default class Nivea extends Component {
    render() {
        return (
        <section class='project1'>
            <div className='project-head'>
                <h1>NIVEA</h1>
                <h2>Media Design and branded social assets for the digital campain of Nivea sensitive man stubble balm.</h2>
                <a href="/protected">SEE PROJECT</a>
            </div>
                <div className='container-fluids' >  
                    <Carousel>  
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <img style={{'height':"100vh"}, {'width':'100vw'}}  className="d-block w-100"  src={niv1} />  
                            <Carousel.Caption>  
                                <h3>Second Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'height':"100vh"}}>  
                            <img style={{'height':"100vh"}, {'width':'100vw'}} className="d-block w-100" src={niv2}   />  
                            <Carousel.Caption>  
                                <h3>Third Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  
        </section>
        )
    }
}
