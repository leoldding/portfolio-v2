import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const About: React.FC = () => {
    return (
        <section id="about">
            <h1>
                About Me
            </h1>
            <p>
                I'm a firm believer in continually learning new things. Even after graduating from NYU with a degree in Computer Science and Data Science, I've picked up cloud technology certifications and continue to build projects to hone my typing skills.
            </p>
            <p>
                When I'm not coding, I'm hitting the gym, watching motorsports, solving <Link to="https://www.worldcubeassociation.org/persons/2019DING10" target="_blank" rel="noopener noreferrer" id="cube-cursor">Rubik's Cubes</Link>, or cleaning up (virtual) <Link to="https://minesweeper.online/player/10436085" target="_blank" rel="noopener noreferrer">minefields</Link>.
            </p>
        </section>
    );
};

export default About;

