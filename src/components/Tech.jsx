import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
    return (
        <div className="flex flex-col justify-center gap-10">
            <div>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Estas son las tecnologías que utilizo para el desarrollo.</p>
                <h2 className={styles.sectionHeadText}>Tecnologías</h2>
            </div>

            <div className="flex flex-row flex-wrap">
                {technologies.map((tech) => (
                    <div className="w-28 h-28" key={tech.name}>
                        <BallCanvas icon={tech.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
