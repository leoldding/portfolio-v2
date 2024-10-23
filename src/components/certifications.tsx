import React from "react";
import certifications from "../data/certifications.json";
import "../styles/certifications.css";

const Certifications: React.FC = () => {
    return (
        <section id="certifications">
            <h1>
                Certifications
            </h1>
            <div className="certifications">
                {certifications && certifications.map(({ id, name, short, company, issued }) => (
                    <div className="certification" key={id}>
                        <div className="certification-shadow" />
                        <div className="certification-info">
                            <div className="certification-name">
                                <h2>
                                    {name} ({short})
                                </h2>
                            </div>
                            <div className="certification-company">
                                <h3>
                                    {company}
                                </h3>
                            </div>
                            <div className="certification-date">
                                <p>
                                    Issued {issued}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;


