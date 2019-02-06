import React, { Component } from "react"


export const Header = class Header extends React.Component {
    render() {
        return (
            <header class="header">
                <h1>Welcome to my portfolio</h1>
                <h3>A Full Stack Developer in training!</h3>
            </header>
        );
    }
}

export const Intro = class Intro extends React.Component {
    render() {
        return (
            <section class="container mx-auto">
                <h2 class="intro" id="intro">About Me</h2>
                <div class="self-start">
                    <p class="text-justify">Vestibulum consequat lacus at scelerisque mattis. In egestas posuere sapien. Nunc a maximus arcu, eget commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque volutpat tellus. Ut at felis vitae odio lobortis convallis. Donec nec molestie eros, in viverra purus. Mauris luctus vestibulum nisi, in interdum lacus imperdiet dictum.</p>
                </div>
                <div class="self-end">
                    <p class="text-justify">Vestibulum consequat lacus at scelerisque mattis. In egestas posuere sapien. Nunc a maximus arcu, eget commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque volutpat tellus. Ut at felis vitae odio lobortis convallis. Donec nec molestie eros, in viverra purus. Mauris luctus vestibulum nisi, in interdum lacus imperdiet dictum.</p>
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
                                        <h3></h3>
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
                                        <p>Address Book Webpage where you can manage your contacts.</p>
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
                <h3 id="contact">Contact</h3>
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