import React from "react";
import "../styles/hero.css";

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
                        <div className="bar" />
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <div className="bar" />
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <div className="bar" />
                        <a href="#certifications">Certifications</a>
                    </li>
                    <li>
                        <div className="bar" />
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <div className="bar" />
                        <a href="/Leo Ding - Resume.pdf" target="_blank">Résumé</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Hero;
