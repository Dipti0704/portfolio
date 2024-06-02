import React, { useEffect, useState } from "react";
import Skills from './Skills.png';
import './Skills.css';

function SkillsPage3() {
  
    return(
        <div className="skill">
            <div className="skillImage">
                <img src ={Skills} alt="img"></img>
            </div>
            <div className="proficiency">
                <h1>PROFECIENCY</h1>
                <div className="a">
                    <div className="a1"></div>
                </div>
                <div className="a">
                    <div className="b1"></div>
                </div>
                <div className="a">
                    <div className="c1"></div>
                </div>
                <div className="a">
                    <div className="d1"></div>
                </div>
                <div className="a">
                    <div className="e1"></div>
                </div>
                <div className="a">
                    <div className="f1"></div>
                </div>
                <div className="a">
                    <div className="g1"></div>
                </div>
                <div className="a">
                    <div className="h1"></div>
                </div>

            </div>
        </div>    
    )
}
export default SkillsPage3;