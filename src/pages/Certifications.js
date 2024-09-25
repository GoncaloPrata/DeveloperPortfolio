// src/pages/Certifications.js
import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications">
            <h2>Certifications / Courses</h2>
            
            {/* Certification 1 */}
            <div className="cert-item">
                <img 
                    src="/images/astronomer-certification-for-apache-airflow-fundamentals.png" 
                    alt="Certification 1" 
                    className="cert-image"  // This class ensures the image is resized
                />
              {/* Add fields next to the image */}
              <div className="cert-details">
                    <h3>Astronomer Certification for Apache Airflow Fundamentals</h3>
                    <p><b>Date Achieved:</b> September 2024</p>
                    <p><b>Issuing Organization:</b> Astronomer</p>
                    <p><b>Badge Link : </b> <a href="https://www.credly.com/earner/earned/badge/d00fb57a-1007-488c-aefa-d11ed8735e35">Creddly Badge</a> </p>
                    <ul>
                        <li>Scheduling</li>
                        <li>Process Orchestration</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>

            {/* Repeat for more certifications */}
            <div className="cert-item">
                <img 
                    src="/images/work_in_progress.jpg" 
                    alt="Certification 2" 
                    className="cert-image"
                />
                <div className="cert-details">
                    <h3>Selenium Webdriver with PYTHON from Scratch + Frameworks</h3>
                    <p>Date Achieved: Working on it</p>
                    <p><b>Issuing Organization:</b> Udemy</p>
                    <p><b>Course Link : </b> <a href="https://www.udemy.com/course/learn-selenium-automation-in-easy-python-language/?couponCode=UPGRADE02223">Udemy Course</a> </p>
                    <ul>
                        <li>Software Testing</li>
                        <li>Selenium</li>
                        <li>Test Automation</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
