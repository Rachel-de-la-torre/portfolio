import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Smile } from '../assets/assetsImport'; 



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
              </div>
            </nav>
            
        )
    }
}

            