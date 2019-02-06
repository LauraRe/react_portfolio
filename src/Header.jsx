import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <h1 className="navigation-title">
                <Link className="link-text" to='/'>My Portfolio</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><NavLink className="link-text" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me</NavLink></li>
                <li className="mr-6"><NavLink className="link-text" activeStyle={{ fontWeight: "bold" }} to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation