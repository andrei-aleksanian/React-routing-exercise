import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";

const Header = props => {
    return (
        <header>
            <ul>
                <li><NavLink  to="/" exact>Courses</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
            </ul>
        </header>
    );

};

export default Header;