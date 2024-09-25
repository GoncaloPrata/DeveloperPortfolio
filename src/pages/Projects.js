// src/pages/Projects.js
import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <p>In here are some of the projects I am currently working on:</p>
                {/* Add fields next to the image */}
                <div className="cert-details">
                    <ul>
                        <li>Developer Portfolio : <a href="https://github.com/GoncaloPrata/DeveloperPortfolio">You are here now!</a> </li>
                    </ul>
                </div>
        </section>
    );
};

export default Projects;