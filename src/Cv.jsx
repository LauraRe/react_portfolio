import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            cv: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    cv: response.data
                })
            })
    }

    render() {
        const cv = this.state.cv
        let cvList

        if (cv.length > 0) {
            cvList = cv.map((cvDetail, index) => {
                return (
                    <div key={cvDetail.id}>
                        <div>
                            <p id="cv-when">{cvDetail.when}</p>
                            <h3 id="cv-list">{cvDetail.name}</h3>
                        </div>
                        <div id="cv-details" className="font-body">
                            <p>{cvDetail.place}</p>
                            <p>{cvDetail.location}</p>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/2 pr-5">
                        <div className="px-20">
                            <img src='./img/laurareale.jpeg' className='rounded-full mx-32'></img>
                        </div>
                        <div className="w-3/4">
                        </div>
                    </div>
                    <div className="text-black">
                        <h1 id="cv-title" className="p-10">Curriculum Vitae</h1>
                        {cvList}
                    </div>
                </div>
            </div>
        )
    }
};

export default Cv