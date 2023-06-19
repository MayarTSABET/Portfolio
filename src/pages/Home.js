import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Home.css";
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h1>Hi, My name is Mayar</h1>
                <div className="prompt">
                    <p>
                        A software developer with a passion for learning and creating.
                    </p>
                    <LinkedInIcon/>
                    <EmailIcon/>
                    
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, CSS, Flutter</span>
                    </li>Front-End
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>NodeJs, </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>C, JavaScript, Java, Dart</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;