import React, { Component } from "react"

export function Project(props) {
  return (
    <div className="w-1/2 p-5">
      <a href={props.site}>
        <article className="w-full">
          <div className="jod-desc">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
          <img src={props.image} className="img-fluid" />
        </article>
      </a>
      <a href={props.github}><button className="btn">=> See {props.title} Code On GitHub</button></a>
    </div>
  )
}