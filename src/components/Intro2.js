import React from "react";
import website from "./website.png";
import "./Intro2.css";
import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import bootstrap from "./bootstrap.png";
import react from "./react.png";
import nodejs from "./nodejs.png";
import dsaImage from "./Coding.png"
function Intro2(){
    return(
     <section className="intro2">
        <div className="firstPart">
        <div className="Webdev">
        <h1>Web Development</h1>
        <div className="skills">
            <img src={html} alt="html" className="ihtml"></img>
            <img src={css} alt="css" className="icss"></img>
            <img src ={javascript} alt="javascript" className="ijavascript"></img>
            <img src={bootstrap} alt ="bootstrap" className="ibootstrap"></img>
            <img src={react} alt="react" className="ireact"></img>
            <img src={nodejs} alt ="nodejs" className="inodejs"></img>

        </div>
        <div className="text">
        <h2>💥 Building Fully responsive website frontend using HTML, CSS, Bootstrap and Javascript.</h2>

        <h2>💥 As of now I have knowledge only of frontend but in near future I will learn more skills and excited to explore React, NodeJS, Django, Flask and many more.</h2>

        <h2>💥 I have also used Abode Photoshop, Illustrator and Figma to design User interface of websites and mobile applications and designed logos.</h2>
        </div>
        </div>
        <div className="devImage">
        <img src={website} alt="websiteimage"></img>
        </div>
        
        </div>




        <div className="dsa">
            <div className="dsaImage">
                <img src={dsaImage} alt="dsaImage" className="dimg"></img>
            </div>
            <div className="dsaText">
                <h1>Data Structures and Algorithms</h1>
                <h2>💥 I have knowledge of Data Structures like Hash Tables, Trees, Tries, Graphs, and various algorithms for solving various problems efficiently.</h2>

                <h2>    💥 As I know Data Structures and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like Codeforces, Codechef, Hackerrank and many more.</h2>


            </div>
        </div>
        
     </section>   
    )
}
export default Intro2;