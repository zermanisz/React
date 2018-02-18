import React from "react";
import ReactDom from "react-dom";
import Logo from "./Logo.js";
import About from "./About.js";
import Slogon from "./Slogon.js";
import Grid from "./Grid.js";
import "./style.css";

const App = () => (
  <div>
    <div ClassName="slogonlogo">
      <Logo title="Docplanner Group" />
    </div>
    <div className="about">
      <About title_1="About us" title_2="   career" />
    </div>
    <div ClassName="slogon">
      <Slogon titleSlogon="Making the healthcare experience more human" />
    </div>
    <div ClassName="grid">
      <Grid
        col_1="We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."
        col_2="We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."
      />
    </div>
  </div>
);
ReactDom.render(<App />, document.getElementById("root"));
