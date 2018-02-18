import React from "react"
import RefLocation from "./RefLocation.js"

const RefLocationList = props =>
  props.list.map(t => <RefLocation href={t.link} title={t.text} />)

export default RefLocationList
