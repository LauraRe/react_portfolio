import React from "react"
import ReactDOM from "react-dom"
import { Header, Intro, Portfolio, Contact, Meetme, Page } from "./Hello"
import Navigation from "./Header"
import Footer from "./Footer"
import './css/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import Cv from "./Cv"
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Navigation targetId="switch" />
                <div id="switch" className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Page} ></Route>
                        {/* <Route exact path='/about' component={About}></Route> */}
                        {/* <Route exact path='/projects' component={Projects}></Route> */}
                        <Route exact path='/cv' component={Cv}></Route>
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