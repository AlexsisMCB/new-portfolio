import React from 'react';
import selfImage from '../../assets/images/portfolio.gif';

function About() {
    return (
        <div id="who-i-am" className="background-2">
            <img src={selfImage} className="selfie" style={{ width: "25%" }} alt="selfie" />
            <div>
                <div className="intro">
                    <h3 className="font-italic">Hello, Welcome!</h3>
                    <h4 className="font-italic">Let me introduce myself.</h4>
                </div>
                <p>
                My full name is Alexsis Conley-Brown.
                I am currently enrolled in the UW Extended Campus Coding Boot Camp!
                I take a keen interest in web development and graphic design.
                Moving forward I plan to continually learn and progress in this line of work.
                </p>
            </div>
        </div>
    );
}

export default About;