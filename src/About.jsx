import React from "react"
import { UndrawWorkingLate } from 'react-undraw-illustrations'

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawWorkingLate />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About Me</h1>
                    <p className="content-text">My name is Laura Reale and I am currently a full time student at the <a href='https://craftacademy.se/english'>CraftAcademy</a> Full Stack Web Developer Bootcamp (). </p>
                </div>
            </div>
        </div>
    )
}

export default About