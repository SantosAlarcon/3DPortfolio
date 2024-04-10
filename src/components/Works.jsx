import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { github, globe } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import "../styles/Works.css";

const ProjectCard = ({
    name,
    index,
    description,
    tags,
    image,
    source_code_link,
    live_code_link,
}) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="w-full select-none rounded-2xl bg-tertiary p-5 transition hover:drop-shadow-[0_0_1em_skyblue] sm:w-[360px]"
        >
            <div className="relative h-[230px] w-full">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full rounded-2xl object-cover"
			loading="lazy"
                />
                <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
                    <div
                        className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                        onClick={() => window.open(source_code_link, "_blank")}
                    >
                        <img
                            src={github}
                            alt="github"
                            className="h-1/2 w-1/2 object-contain"
                        />
                    </div>
                    <div
                        className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                        onClick={() => window.open(live_code_link, "_blank")}
                    >
                        <img
                            src={globe}
                            alt="github"
                            className="h-1/2 w-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-[26px] font-bold text-white">{name}</h3>
                <p className="mt-2 text-[16px] text-secondary">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={tag.name}
                        className={`rounded-md px-2 py-[0.15em] text-[14px] ${tag.color}`}
                    >
                        {tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    </motion.div>
);

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <h1 className={styles.sectionHeadText}>Proyectos</h1>
            </motion.div>

            <div className="flex w-full">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 max-w-3xl text-[18px] leading-[30px] text-secondary"
                >
                    Aquí se reflejarán los proyectos que he ido realizando a lo
                    largo de mi carrera, mostrando mis aptitudes como
                    programador. Cada proyecto está enlazado a su repositorio en
                    GitHub.
                    <br />
                    <br />
                    Pulsa en el icono de <b>GitHub</b> para ir al repositorio, o
                    el icono del <b>globo</b> para ver el proyecto en
                    funcionamiento.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap justify-evenly gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...project}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");
