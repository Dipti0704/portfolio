import React from "react";
import "./ContactPage4.css";
import myImg from "./myImg.png";
import linkdin from "./linkedin.png";
import github from "./logo.png";
import gmail from "./email.png";
import i from "./connection.png";

function Contact() {
  return (
    <div className="mainContainer">
      <div className="container1">
        <div className="box1">
          <img src={myImg} alt="img"></img>
        </div>
        <div className="box2">
          <div className="text">
            <h1>Reach out to me!</h1>
            <h3>I am available on almost every social media platform.</h3>
            <h3>You want to discuss a project or just want to say hi? </h3>
            <h3>My Inbox is always open for you.</h3>
          </div>

          <div class="social-container">
            <a href="https://github.com/Dipti0704">
              <img
                style={{ width: 50, height: 50 }}
                src={github}
                alt="github"
                className="images"
              />
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <img
                style={{ width: 50, height: 50 }}
                src={gmail}
                alt="gmail"
                className="images"
              />
            </a>
            <a href="https://www.linkedin.com/in/dipti-hatwar-024027289/">
              <img
                style={{ width: 50, height: 50 }}
                src={linkdin}
                alt="linkdin"
                className="images"
              />
            </a>
          </div>
          <div className="button">
            <li>See my Resume</li>
          </div>
        </div>
       
      </div>
      <div className="container2">
        <div className="box3">
          <li>Lets connect and build someting together</li>
        </div>
      </div>
      <div className="i">
        <img src={i} alt ="img"></img>
      </div>
    </div>
  );
}
export default Contact;
