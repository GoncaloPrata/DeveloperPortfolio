// src/pages/AboutMe.js
import React from 'react';

const AboutMe = () => {
    return (
        <section id="about">
            <h2></h2>
            <div className="cert-item">
                <img
                    src="/images/Cover Foto.jpg"
                    alt="GoncaloPrata'sCoverFoto"
                    className="about-me-image"  // This class ensures the image is resized
                />
                {/* Add fields next to the image */}
                <div className="cert-details">
                    <h3>Who Am I?</h3>
                    <p>My name is Gonçalo Prata and I am a backend engineer from Lisbon. I have over 2 years of experience building backend systems for one of the most important
                        entities in Portugal. These systems serve different purposes such as:</p>
                    <ul>
                        <li>Scheduling thousands of ETL processes</li>
                        <li>Automatically testing a REST framework developped by other teams</li>
                        <li>CLI applications that automate or make it easier to complete daily tasks</li>
                    </ul>
                    <h2></h2>
                    <p>Among the several techonologies I use, the ones I am most confident in are: </p>
                    <ul>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Git (in both CLI, Gitlab, Github and Bitbucket)</li>
                    </ul>
                    <h2></h2>
                    <p>When it comes to non technical skills I have: </p>
                    <ul>
                        <li>Lead several projects with both technical and non techincal colleagues</li>
                        <li>Implemented testing and coding best practices in codebases used by several teams</li>
                        <li>Create documentation for both technical and non technical colleagues </li>
                    </ul>
                    <h2></h2>
                    <p>If you would like to contact me for hybrid/remote jobs in Lisbon or remote jobs worldwide, 
                        reach out to me either on my <a href="https://www.linkedin.com/in/gon%C3%A7alo-prata-76bb73172/">Linkedin profile</a> 
                        or via email at "goncaloprata@gmail.com".</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
