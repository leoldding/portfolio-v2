import React from "react";
import experience from "../data/experience.json";
import "../styles/experience.css";

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h1>
                Experience
            </h1>
            <div className="experiences">
                {experience && experience.map(({ id, position, company, start, end, description }) => (
                    <div className="experience" key={id}>
                        <div className="experience-shadow" />
                        <div className="experience-info" >
                            <div className="experience-header">
                                <div className="experience-position">
                                    <h2>
                                        {position}
                                    </h2>
                                    <h3>
                                        {company}
                                    </h3>
                                </div>
                                <div className="experience-date">
                                    <p>
                                        {start} - {end}
                                    </p>
                                </div>
                            </div>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;


