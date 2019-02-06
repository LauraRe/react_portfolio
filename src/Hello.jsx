import React, { Component } from "react"


export const Header = class Header extends React.Component {
    render() {
        return (
            <header class="container-fluid">
                <div class="header">
                    <h1>Welcome to my portfolio</h1>
                    <h3>I'm a Full Stack Developer!</h3>
                </div>
            </header>
        );
    }
}

export const Intro = class Intro extends React.Component {
    render() {
        return (
            <section class="container-fluid section-sobre">
                <h2 class="intro" id="intro">About Me</h2>
                <div class="container sobre-container d-md-flex justify-content-md-around">
                    <div class="p-2 align-self-md-start">
                        <p class="text-justify">Vestibulum consequat lacus at scelerisque mattis. In egestas posuere sapien. Nunc a maximus arcu, eget commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque volutpat tellus. Ut at felis vitae odio lobortis convallis. Donec nec molestie eros, in viverra purus. Mauris luctus vestibulum nisi, in interdum lacus imperdiet dictum.</p>
                    </div>
                    <div class="p-2 align-self-md-end">
                        <p class="text-justify">Vestibulum consequat lacus at scelerisque mattis. In egestas posuere sapien. Nunc a maximus arcu, eget commodo lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque volutpat tellus. Ut at felis vitae odio lobortis convallis. Donec nec molestie eros, in viverra purus. Mauris luctus vestibulum nisi, in interdum lacus imperdiet dictum.
              </p></div>
                </div>
            </section>
        );
    }
}

export const Portfolio = class Portfolio extends React.Component {
    render() {
        return (
            <section class="portfolio container-fluid">
                <h2 id="portfolio">Portfolio</h2>
                <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
                    <article>
                        <div class="jod-desc">
                            <h3>Title</h3>
                            <p>Suspendisse sollicitudin tempus tellus a faucibus.</p>
                        </div>
                        <img src="https://cdn-images-1.medium.com/max/2000/1*Aw-yy-9nb2_SZS5RcnyLVA.jpeg" class="img-fluid" />
                    </article>
                    <article>
                        <div class="jod-desc">
                            <h3>FizzBuzz</h3>
                            <p>FizzBuzz challenge in JavaScript.</p>
                        </div>
                        <img src="./img/FizzBuzz_js1.png" class="img-fluid" />
                    </article>
                    <article>
                        <div class="jod-desc">
                            <h3>Title</h3>
                            <p>Suspendisse sollicitudin tempus tellus a faucibus.</p>
                        </div>
                        <img src="https://cms-assets.tutsplus.com/uploads/users/988/posts/30356/image/Pure.jpg" class="img-fluid" />
                    </article>
                    <article>
                        <div class="jod-desc">
                            <h3>Title</h3>
                            <p>Suspendisse sollicitudin tempus tellus a faucibus.</p>
                        </div>
                        <img src="https://cdn.dribbble.com/users/1520719/screenshots/3527107/app_landing_page_5-dribbble-white-2.png" class="img-fluid" />
                    </article>
                </div>
            </section>

        );
    }
}

export const Contact = class Contact extends React.Component {
    render() {
        return (
            <section class="container mx-auto">
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