import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Smile } from '../assets/assetsImport'; 

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
            <img src={ Smile } alt="logo" />
            {/* <img src = '../assets/smile.svg'> */}
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/works">Work</Link></li>
                {/* <li><Link to="/press">Press</Link></li> */}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
        )
    }
}
            