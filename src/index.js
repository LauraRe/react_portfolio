import React from "react"
import ReactDOM from "react-dom"
import { Header, Intro, Portfolio, Contact, Meetme, Page } from "./Hello"
import Navigation from "./Header"
import Footer from "./Footer"
import './css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faFacebook);

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Navigation />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Page} ></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/projects' component={Projects}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    )
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById("app"));