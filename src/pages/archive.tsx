import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";

const Archive: React.FC = () => {
    return (
        <div className="archive-container">
            <Link to="/">Leo Ding</Link>
            {projects && projects.map(({ id, name, technologies, github, link, year }) => (
                <div key={id}>
                    {year} - {name} | {technologies && technologies.map(tech => (<span key={tech}>{tech} </span>))} | <Link to={github} target="_blank">github</Link> | {link && <Link to={link} target="_blank">website</Link>}
                </div>
            ))}
        </div >
    );
};

export default Archive;
