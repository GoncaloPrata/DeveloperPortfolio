// src/pages/Career.js
import React from 'react';

const Career = () => {
    return (
        <section id="career">
            {/* Xpand IT Carrer */}
            <div className="cert-item">
                <img
                    src="/images/xpand_it_logo.png"
                    alt="XpandItLogo"
                    className="carrer-image"  // This class ensures the image is resized
                />
                {/* Add fields next to the image */}
                <div className="cert-details">
                    <ul>
                        <strong>Big Data Software Engineer (July 2022 - Present)</strong>
                        <ul>
                            <li>Plan, execute, and test solutions while providing ongoing support to ensure effective use of the framework and custom
                                tools.</li>
                            <li>Collaborate with clients to tailor the framework and build custom solutions for their specific needs.</li>
                            <li>Develop and maintain features for a data migration framework leveraging a REST API to unify data from multiple
                                sources.</li>
                        </ul>
                        {/* Repeat for other positions */}
                    </ul>
                </div>
            </div>
            {/* Xpand IT Carrer */}

            {/* Happy Code Carrer */}
            <div className="cert-item">
                <img
                    src="/images/happy_code_logo.png"
                    alt="HappyCodeLogo"
                    className="carrer-image"  // This class ensures the image is resized
                />
                {/* Add fields next to the image */}
                <div className="cert-details">
                    <ul>
                        <strong>Programming Teacher (September 2021 - July 2022)</strong>
                        <ul>
                            <li>Teach kids as young as 3 and as old as 18 years old programming languages/concepts.</li>
                            <li>Develop books and other material for other teachers to use.</li>
                            <li>Help new teachers get started and answer any questions they may have.</li>
                        </ul>
                        {/* Repeat for other positions */}
                    </ul>
                </div>
            </div>
            {/* Xpand IT Carrer */}
        </section>
    );
};

export default Career;