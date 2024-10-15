import React from "react";
import experience from "../data/experience.json";

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h1>
                Experience
            </h1>
            {experience && experience.map(({ id, position, company, start, end, description }) => (
                <div key={id}>
                    <p>
                        {position} - {company}
                    </p>
                    <p>
                        {start} - {end}
                    </p>
                    <p>
                        {description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Experience;


