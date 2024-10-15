import React from "react";

const Hero: React.FC = () => {
    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        window.history.replaceState(null, '', window.location.pathname);
    };
    return (
        <section>
            <h1>
                <a href="#" onClick={handleScrollToTop}>Leo Ding</a>
            </h1>
            <p>
                Software Engineer
            </p>
            <p>
                I occasionally code.
            </p>
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
        </section>
    );
};

export default Hero;
