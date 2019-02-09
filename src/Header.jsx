import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <h1 className="navigation-title">
                <Link className="link-text" to='/'>Laura Reale</Link>
            </h1>
            <ul className="list-reset flex">
                <li className="mr-6"><a className="link-text" href='/#intro'>About Me</a></li>
                <li className="mr-6"><a className="link-text" href='/#portfolio'>Portfolio</a></li>
                <li className="mr-6"><a className="link-text" href='/#contact'>Contact</a></li>
                <li className="mr-6"><NavLink className="link-text" to='/cv'>CV</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation