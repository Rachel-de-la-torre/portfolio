import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
            <p>this will be the nav bar</p>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/works">Work</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/press">Press</Link></li>
                <li><Link to="/contact">contact</Link></li>
              </ul>
            </nav>
        )
    }
}
            