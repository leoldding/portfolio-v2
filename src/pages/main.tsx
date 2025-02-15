import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Certifications from "../components/certifications";
import Projects from "../components/projects";
import "../styles/main.css";

const Main: React.FC = () => {
    return (
        <>
            <div className="main-container">
                <div className="left-container">
                    <Hero />
                </div>
                <div className="right-container">
                    <About />
                    <Experience />
                    <Projects />
                    <Certifications />
                </div>
            </div>
            <footer>
                <p>
                    Leo Ding © {(new Date().getFullYear())}
                </p>
            </footer>
        </>
    );
};

export default Main; 
