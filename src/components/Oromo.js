import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import {oro1} from '../assets/assetsImport';
import {oro2} from '../assets/assetsImport';
import {oro3} from '../assets/assetsImport';


export default class Oromo extends Component {
    render() {
        return (
            <section class='project1'>
                <div className='project-head'>
                    <h1>OROMO</h1>
                    <h2>I developed the wireframe, UX/ UI for the website and shop, for this subscription based coffee service.</h2>
                    <a href="https://oromo.coffee/">SEE PROJECT</a>
                </div>
                <div className='container-fluids' >  
                    <Carousel>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro1} />  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={oro2}   />  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}} >  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro3} />  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  
            </section>
        )
    }
}
