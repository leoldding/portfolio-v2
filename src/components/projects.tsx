import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
    const [showMore, setShowMore] = useState(false);
    const projectCount = showMore ? 4 : 2;
    const projects = data.slice(0, projectCount);

    const handleShowProjects = () => {
        setShowMore(!showMore);
    }

    return (
        <section id="projects">
            <h1>
                Projects
            </h1>
            <div className="projects">
                {projects && projects.map(({ id, name, technologies, github, link, description }) => (
                    <div className="project" key={id}>
                        <div className="project-shadow" />
                        <div className="project-info">
                            <div className="project-header">
                                <h2>
                                    {name}
                                </h2>
                                <div className="project-links">
                                    <div>
                                        <Link to={github} target="_blank" rel="noopener noreferrer"><FaGithub  /></Link>
                                    </div>
                                    {link && <div>
                                        <Link to={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></Link>
                                    </div>}
                                </div>
                            </div>
                            <p>
                                {description}
                            </p>
                            <div>
                                {technologies && technologies.map(tech => (
                                    <span className="project-tech" key={tech}>{tech} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={handleShowProjects}>{showMore ? "Show Less" : "Show More"}</button>
                <Link to="/archive">View Archive</Link>
            </div>
        </section>
    );
};

export default Projects;
