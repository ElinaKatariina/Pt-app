import React from 'react';
import { Component } from "react";
import Link from 'react-dom';

export default class Navigator extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg -light">
                <button className="navbar-togglernavbar-toggler-right" type="button"data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Togglenavigation">
                    <span className="navbar-toggler-icon"></span></button>
            
            <Link className="navbar-brand" to ="/" >My React Page</Link>
            <div className="collapsenavbar-collapse" id ="navbarSupportedContent">
            <ul className="navbar-navmr-auto">
            <li className="nav -itemactive">
                <Link className="nav-link"to="/home"  >Home</Link>
            </li>
            <li className="nav -item">
                <Link className="nav-link"to="/customers">Customers</Link>
            </li>
            <li className="nav -item">
                <Link className="nav-link"to="/trainings">Trainings</Link>
            </li>
            </ul >
            </div>
            </nav>
        );
    }

}