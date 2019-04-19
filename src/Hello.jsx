import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Project } from "./Project";

library.add(faGithub, faEnvelope, faLinkedin)


export const Header = class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Welcome to my portfolio</h1>
                <h3>A Full Stack Developer in training!</h3>
                <ul className="list-reset flex text-white pt-20">
                    <li className="mx-5"><a href="https://github.com/LauraRe"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a></li>
                    <li className="mx-5"><a href="https://www.linkedin.com/in/realelaura"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a></li>
                    <li className="mx-5"><a href="mailto:laaru1988@gmail.com"><FontAwesomeIcon size="2x" icon={["fas", "envelope"]} /></a></li>
                </ul>
            </header>
        );
    }
}

export const Intro = class Intro extends React.Component {
    render() {
        return (
            <section id="intro">
                <h2 className="intro">About Me</h2>
                <div className="container mx-auto">
                    <div className="flex font-body text-xl">
                        <div className="w-1/2 pr-5">
                            <div className="px-20">
                                <img src='./img/laurareale.jpeg' className='rounded-full mx-32'></img>
                            </div>
                            <p className="text-center leading-loose pt-10">I am currently enrolled in CraftAcademy's full-stack web developer bootcamp. I also have a master's degree in Functional Genomics and some experience in the Molecular Biology field in general. </p>
                        </div>
                        <div className="w-1/2 px-16">
                            <p className="text-center font-title text-xl font-bold">Here's a few of the tools I use</p>
                            <div className="container mx-auto font-title">
                                <div className="flex pt-5">
                                    <div className="w-1/2 p-5">
                                        <div className="list-reset text-center leading-loose">
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>React</li>
                                            <li>Rails</li>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-5">
                                        <div className="list-reset text-center leading-loose">
                                            <li>Ruby</li>
                                            <li>RSpec</li>
                                            <li>Vanilla JavaScript</li>
                                            <li>Cucumber-js</li>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 text-center text-bold font-title">
                                    <a href="./Cv">Check my CV !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const Portfolio = class Portfolio extends React.Component {
    render() {
        return (
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div className="container mx-auto">
                    <div className="flex">
                        <Project
                            site="https://laurare.github.io/"
                            title="My First Webpage"
                            description="The very first webpage that I have ever created."
                            image="./img/MyFirstWebpage.png"
                            github="https://github.com/LauraRe/LauraRe.github.io"
                        />
                        <Project
                            site="https://laurare.github.io/bmi_challenge/src"
                            title="Body Mass Index (BMI)"
                            description="A JavaScript program that calculates an individual`s BMI index with metric and imperial methods."
                            image="./img/bmi.png"
                            github="https://github.com/LauraRe/bmi_challenge"
                        />
                    </div>

                    <div className="flex">
                        <Project
                            site="https://laurare.github.io/fizzbuzz_js/"
                            title="FizzBuzz"
                            description="FizzBuzz challenge in JavaScript."
                            image="./img/FizzBuzz_js1.png"
                            github="https://github.com/LauraRe/fizzbuzz_js"
                        />
                        <Project
                            site="https://laurare.github.io/address_book_challenge/"
                            title="Address Book"
                            description="A simple address book page where you can manage your contacts."
                            image="./img/AddressBook.png"
                            github="https://github.com/LauraRe/address_book_challenge"
                        />
                    </div>

                    <div className="flex">
                        <Project
                            site="https://rps-laurare.netlify.com/"
                            title="Rock-Paper-Scissors"
                            description="Rock-Paper-Scissors challenge in JavaScript."
                            image="./img/rps.png"
                            github="https://github.com/LauraRe/rps_challenge"
                        />
                        <Project
                            site="https://khronos.netlify.com/"
                            title="khronos"
                            description="A time-tracking app where you can track your work and invoice your clients."
                            image="./img//khronos.png"
                            github="https://github.com/LauraRe/khronos"
                        />
                    </div>
                </div>
            </section >

        );
    }
}

export const Contact = class Contact extends React.Component {
    render() {
        return (
            <section className="contact container mx-auto font-body" id="contact">
                <h2>Contact</h2>
                <form className="w-full items-center" name="contact" method="POST" data-netlify="true">
                    <div className="flex items-center border-b border-b-2 border-blue-darkest my-10">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div className="flex items-center border-b border-b-2 border-blue-darkest my-10">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email"
                            placeholder="Email" />
                    </div>
                    <div className="flex items-center border-b border-b-2 border-blue-darkest my-10">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Telephone" />
                    </div>
                    <div className="flex items-center border-b border-b-2 border-blue-darkest mt-10">
                        <textarea
                            className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="exampleFormControlTextarea1"
                            placeholder="Message"></textarea>
                    </div>
                    <button className="btn w-full mb-10 mt-5">Send</button>
                </form>
            </section >
        );

    }
}

export const Meetme = class Meetme extends React.Component {
    render() {
        return (
            <footer id="meetme" className="container-fluid d-flex align-items-center justify-content-center flex-column">
                <p className="text-white font-body text-center mb-10">You can reach me at:</p>
                <ul className="list-reset flex text-white">
                    <li className="mx-5"><a href="https://github.com/LauraRe"><FontAwesomeIcon size="2x" icon={["fab", "github"]} /></a></li>
                    <li className="mx-5"><a href="https://www.linkedin.com/in/realelaura"><FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} /></a></li>
                    <li className="mx-5"><a href="mailto:laaru1988@gmail.com"><FontAwesomeIcon size="2x" icon={["fas", "envelope"]} /></a></li>
                </ul>
            </footer>
        )
    }
}

export const Page = class Page extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <Portfolio />
                <Contact />
                <Meetme />
            </div>
        );
    }
}