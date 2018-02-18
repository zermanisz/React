import React from "react"

const RefLocation = props => {
  console.log(props)
  return (
    <p>
      <img
        class="lead_logo"
        src="http://www.docplanner-platform.com/img/general/about-us/img/sygnet.png"
      />
      <a href={props.href}> {props.title} </a>
    </p>
  )
}

export default RefLocation
