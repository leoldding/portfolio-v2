import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import "../styles/projects.css";

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
                            <p>
                                {name}
                            </p>
                            <p>
                                {technologies && technologies.map(tech => (
                                    <span className="project-tech" key={tech}>{tech} </span>
                                ))}
                            </p>
                            <p>
                                <Link to={github} target="_blank" rel="noopener noreferrer">github</Link>
                            </p>
                            {link && <p>
                                <Link to={link} target="_blank" rel="noopener noreferrer">website</Link>
                            </p>}
                            <p>
                                {description}
                            </p>
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
