import React from "react";
import certifications from "../data/certifications.json";

const Certifications: React.FC = () => {
    return (
        <section id="certifications">
            <h1>
                Certifications
            </h1>
            {certifications && certifications.map(({ id, name, short, company, issued }) => (
                <p key={id}>
                        {name} ({short}), {company} - Issued {issued}
                </p>
            ))}
        </section>
    );
};

export default Certifications;


