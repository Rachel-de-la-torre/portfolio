import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import {oro1} from '../assets/assetsImport';
import {oro2} from '../assets/assetsImport';
import {oro3} from '../assets/assetsImport';


export default class Oromo extends Component {
    render() {
        return (
            <div>
                <div className='container-fluids' >  
                    <Carousel>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro1} />  
                            <Carousel.Caption>  
                                <h3>Second Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}}>  
                            <img style={{'object-fit': 'scale-down'}} className="d-block w-100" src={oro2}   />  
                            <Carousel.Caption>  
                                <h3>Third Demo</h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'object-fit': 'scale-down'}} >  
                            <img style={{'object-fit': 'scale-down'}}  className="d-block w-100"  src={oro3} />  
                            <Carousel.Caption>  
                                <h3>First Demo </h3>  
                            </Carousel.Caption>  
                        </Carousel.Item>  
                    </Carousel>  
                </div>  
            </div>
        )
    }
}
