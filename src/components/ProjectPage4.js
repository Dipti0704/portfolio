import React from "react";
import project from './Project.png';
import './projectPage4.css'
function ProjectPage4(){
    return(
       <div className="container1">
        <div className="box1">
            <img src={project} alt="img"></img>
        </div>
        <div className="box2">
            <h1>Projects</h1>
            <h3>My Project uses various technologies to make the model more
            accurate and stable.</h3>
            <h3>As of now, I haven't done many projects but in near future I will make more projects.</h3>
        </div>

       </div>
    )
}
export default ProjectPage4;