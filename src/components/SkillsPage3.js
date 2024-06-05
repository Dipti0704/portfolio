import React, { useEffect, useState } from "react";
import Skills from "./Skills.png";
import "./Skills.css";

function SkillsPage3() {
  return (
    <div className="skill">
      <div className="skillImage">
        <img src={Skills} alt="img"></img>
      </div>
      <div class="container">
        <h1>PROFICIENCY</h1>
        <div class="bar learning" data-skill="TDD"></div>
        <div class="bar back basic" data-skill="Python"></div>
        <div class="bar back intermediate" data-skill="C#"></div>
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar front expert" data-skill="HTML5"></div>
        <div class="bar back basic" data-skill="Python"></div>
        <div class="bar back intermediate" data-skill="C#"></div>
        
      </div>
    </div>
  );
}
export default SkillsPage3;
