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
              <div className='intLinks'>
                <Link class="linkclass" to="/about">About</Link>
                <Link class="linkclass" to="/work">Work</Link>
                <Link class="linkclass" to="/contact">Contact</Link>
              </div>
            </nav>
        )
    }
}
            