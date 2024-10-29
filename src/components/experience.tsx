import React from "react";
import { Link } from "react-router-dom";
import data from "../data/experience.json";
import "../styles/experience.css";
import "../styles/tech.css";

const Experience: React.FC = () => {
    const experiences = data.filter(experience => {
        return experience.showExperience;
    })

    return (
        <section id="experience">
            <h1>
                Experience
            </h1>
            <div className="experiences">
                {experiences && experiences.map(({ id, position, company, start, end, technologies, description }) => (
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
                            <div className="tags">
                                {technologies && technologies.map(tech => (
                                    <span className="tech" key={tech}>{tech} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/Leo Ding - Resume.pdf" target="_blank">View Résumé</Link>
            </div>
        </section>
    );
};

export default Experience;


