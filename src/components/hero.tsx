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
                    I occasionally code.
                </p>
            </div>
            <nav className="hero-nav">
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#certifications">Certifications</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/Leo Ding - Resume.pdf" target="_blank">Résumé</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Hero;
