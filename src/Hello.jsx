import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'


export const Header = class Header extends React.Component {
    render() {
        return (
            <header className="header min-h-screen">
                <h1>Welcome to my portfolio</h1>
                <h3>A Full Stack Developer in training!</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faGithub} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                </ul>
            </header>
        );
    }
}

export const Intro = class Intro extends React.Component {
    render() {
        return (
            <section>
                <h2 class="intro" id="intro">About Me</h2>
                <div class="container mx-auto">
                    <div class="flex font-body text-lg">
                        <div class="w-1/2 pr-5">
                            <p class="text-center leading-normal pt-10">I am currently enrolled in CraftAcademy's full-stack web developer bootcamp. I also have a master's degree in Functional Genomics and some experience in the Molecular Biology field in general. </p>
                        </div>
                        <div class="w-1/2 px-16">
                            <p class="text-center">Here's a few of the tools I use</p>
                            <div class="container mx-auto font-title">
                                <div class="flex">
                                    <div class="w-1/2 p-5">
                                        <div class="list-reset text-center leading-loose">
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>React</li>
                                            <li></li>
                                        </div>
                                    </div>
                                    <div class="w-1/2 p-5">
                                        <div class="list-reset text-center leading-loose">
                                            <li>Ruby</li>
                                            <li>RSpec</li>
                                            <li>Vanilla JavaScript</li>
                                            <li>Cucumber-js</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export const Portfolio = class Portfolio extends React.Component {
    render() {
        return (
            <section class="portfolio">
                <h2 id="portfolio">Portfolio</h2>
                <div class="container mx-auto">
                    <div class="flex">
                        <div class="w-1/2 p-5">
                            <a href="https://laurare.github.io/">
                                <article class="w-full">
                                    <div class="jod-desc">
                                        <h3>My First Webpage</h3>
                                        <p>The very first webpage that I have ever created.</p>
                                    </div>
                                    <img src="./img/MyFirstWebpage.png" class="img-fluid" />
                                </article>
                            </a>
                            <a href="https://github.com/LauraRe/LauraRe.github.io"><button class="btn">=> See MyFirstWebsite Code On GitHub</button></a>
                        </div>
                        <div class="w-1/2 p-5">
                            <a href="https://laurare.github.io/bmi_challenge/src">
                                <article class="w-full">
                                    <div class="jod-desc">
                                        <h3>Body Mass Index (BMI)</h3>
                                        <p>A JavaScript program that calculates an individual`s BMI index with metric and imperial methods.</p>
                                    </div>
                                    <img src="./img/bmi.png" class="img-fluid" />
                                </article>
                            </a>
                            <a href="https://github.com/LauraRe/bmi_challenge"><button class="btn">=> See BMI Code on GitHub</button></a>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="w-1/2 p-5">
                            <a href="https://laurare.github.io/fizzbuzz_js/">
                                <article class="w-full">
                                    <div class="jod-desc">
                                        <h3>FizzBuzz</h3>
                                        <p>FizzBuzz challenge in JavaScript.</p>
                                    </div>
                                    <img src="./img/FizzBuzz_js1.png" class="img-fluid" />
                                </article>
                            </a>
                            <a href="https://github.com/LauraRe/fizzbuzz_js"><button class="btn">=> See FizzBuzz Code on GitHub</button></a>
                        </div>
                        <div class="w-1/2 p-5">
                            <a href="https://laurare.github.io/address_book_challenge/">
                                <article class="w-full">
                                    <div class="jod-desc">
                                        <h3>Address Book</h3>
                                        <p>A simple address book page where you can manage your contacts.</p>
                                    </div>
                                    <img src="./img/AddressBook.png" class="img-fluid" />
                                </article>
                            </a>
                            <a href="https://github.com/LauraRe/address_book_challenge"><button class="btn">=> See Address Book Code on GitHub</button></a>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export const Contact = class Contact extends React.Component {
    render() {
        return (
            <section class="contact container mx-auto">
                <h2 id="contact">Contact</h2>
                <form class="w-full items-center">
                    <div class="flex items-center border-b border-b-2 border-teal my-10">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Name" />
                    </div>
                    <div class="flex items-center border-b border-b-2 border-teal my-10">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email"
                            placeholder="Email" />
                    </div>
                    <div class="flex items-center border-b border-b-2 border-teal my-10">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text"
                            placeholder="Telephone" />
                    </div>
                    <div class="flex items-center border-b border-b-2 border-teal mt-10">
                        <textarea
                            class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                            id="exampleFormControlTextarea1"
                            placeholder="Message"></textarea>
                    </div>
                    <button class="btn w-full mb-10 mt-5">Send</button>
                </form>
            </section >
        );

    }
}

export const Meetme = class Meetme extends React.Component {
    render() {
        return (
            <footer class="container-fluid d-flex align-items-center justify-content-center flex-column">
                <h3 id="meetme">Meet me</h3>
                <div class="container d-flex align-items-center justify-content-around flex-wrap">
                    <span><i class="fab fa-twitter"></i></span>
                    <span><i class="fab fa-instagram"></i></span>
                    <span><i class="fab fa-codepen"></i></span>
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span><i class="fab fa-linkedin-in"></i></span>
                    <span><i class="fab fa-github"></i></span>
                </div>
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