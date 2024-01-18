import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Smile } from '../assets/assetsImport'; 
import Tick from './Tick';



export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
              <Link to="/">
                <img src={ Smile } alt="logo" className='smile'/>
              </Link>
              <div>
                <Link className="linkclass" to="/">PROJECTS</Link>
                <Link className="linkclass" to="/about">ABOUT</Link>
                {/* <Link className="linkclass" to="/contact">CONTACT</Link> */}
                {/* <Link className="linkclass" to="/Dev">DEV</Link> */}
              </div>
            </nav>
        )
    }
}

            