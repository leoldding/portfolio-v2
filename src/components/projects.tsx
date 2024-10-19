import React from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import "../styles/projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
    const projects = data.slice(0, 4);

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
                                        <Link to={github} target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                                    </div>
                                    {link && <div>
                                        <Link to={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></Link>
                                    </div>}
                                </div>
                            </div>
                            <p>
                                {description}
                            </p>
                            <div className="project-tags">
                                {technologies && technologies.map(tech => (
                                    <span className="project-tech" key={tech}>{tech} </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <Link to="/archive">View Project Archive</Link>
            </div>
        </section>
    );
};

export default Projects;
