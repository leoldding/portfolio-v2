import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
        });
        window.history.replaceState(null, '', window.location.pathname);
    };
    return (
        <section id="hero">
            <div className="hero-text">
                <h1>
                    <a href="#" onClick={handleScrollToTop}>Leo Ding</a>
                </h1>
                <p className="job-title">
                    Software Engineer
                </p>
                <p>
                    I develop seamless interfaces, resilient backends, and optimized cloud infrastructure.
                </p>
            </div>
            <nav className="hero-nav">
                <ul>
                    <li>
                        <a href="#about">
                            <div className="bar" />
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#experience">
                            <div className="bar" />
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#certifications">
                            <div className="bar" />
                            Certifications
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <div className="bar" />
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="socials">
                <Link to="https://github.com/leoldding/" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
                <Link to="https://linkedin.com/in/leo-ding/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
            </div>
        </section>
    );
};

export default Hero;
