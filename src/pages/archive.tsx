import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import "../styles/archive.css";

const Archive: React.FC = () => {
    return (
        <div className="archive-container">
            <Link to="/">← Leo Ding</Link>
            <div className="archive-table">
                <div className="archive-header">
                    <div>Year</div>
                    <div>Name</div>
                    <div>Technologies</div>
                    <div>GitHub</div>
                    <div>Link</div>
                </div>
                {projects && projects.map(({ id, name, technologies, github, link, year }) => (
                    <div className="archive-row" key={id}>
                        <div>{year}</div>
                        <div>{name}</div>
                        <div className="archive-tags">{technologies && technologies.map(tech => (<span className="archive-tech" key={tech}>{tech} </span>))}</div>
                        <div><Link to={github} target="_blank">github</Link></div>
                        <div>{link && <Link to={link} target="_blank">website</Link>}</div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Archive;
