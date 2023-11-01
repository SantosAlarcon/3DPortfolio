import React from "react";
import { SectionWrapper } from "../hoc";
import { tech_front, tech_back } from "../constants";
import { styles } from "../styles";
import TechCard from "./TechCard";

const Tech = () => {
    return (
        <div className="flex flex-col justify-center gap-10">
            <div>
                <h2 className={styles.sectionHeadText}>Tecnologías</h2>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Estas son las tecnologías que utilizo para desarrollar mis proyectos.</p>
            </div>

            <div className="flex flex-row flex-wrap justify-between sm:justify-start">
                <h3 className="text-2xl w-full">Front-end</h3>
                {tech_front.map((tech) => (
                    <div className="w-24 h-24 sm:w-28 sm:h-28" key={tech.name}>
                        <TechCard image={tech.icon} title={tech.name} />
                    </div>
                ))}

                <h3 className="text-2xl w-full">Back-end</h3>
                {tech_back.map((tech) => (
                    <div className="w-24 h-24 sm:w-28 sm:h-28" key={tech.name}>
                        <TechCard image={tech.icon} title={tech.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
