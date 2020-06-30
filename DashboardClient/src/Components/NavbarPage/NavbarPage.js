import React, { Component } from "react";
import NavigationItem from './NavigationItem/NavigationItem'

const navBarPage = (props) => {

    const navigationItems = ["Recruiters","Vendors","Employees"];

    const generaredMenuItems = navigationItems.map(navigationItem =>{
        console.log('props.title is',props.active);
        console.log('navigationItem is',navigationItem);
            return <NavigationItem key = {navigationItem}
                                   active={props.active === navigationItem}
                                   title={navigationItem} clicked={props.clicked}/>
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {/*<li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>*/}
                        {generaredMenuItems}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navBarPage;