import React from "react"

const RefCompany = props => (
  <p>
    <img class="lead_logo" src={props.image} />
    <h1>{props.title}</h1>
    <p>{props.details}</p>
    <h2> {props.info}</h2>
  </p>
)

export default RefCompany
