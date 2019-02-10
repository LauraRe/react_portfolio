import React, { Component } from "react"
import { NavLink, Link } from 'react-router-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.targetId = props.targetId;
    }

    state = {
        className: "navigation"
    }

    listenScrollEvent = e => {
        const element = document.getElementById(this.targetId);
        if (element.scrollTop > 0) {
            this.setState({ className: "navigation-second trans-slow" })
        } else {
            this.setState({ className: "navigation" })
        }
    }

    componentDidMount() {
        document.getElementById(this.targetId).addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <nav className={this.state.className}>
                <h1>
                    <Link className="link-text text-3xl" to='/'>Laura Reale</Link>
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
}

export default Navigation