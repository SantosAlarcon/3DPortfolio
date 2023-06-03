import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	name,
	index,
	description,
	tags,
	image,
	source_code_link,
}) => (
	<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
		<Tilt
			options={{ max: 45, scale: 1, speed: 450 }}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
		>
			<div className="relative w-full h-[230px]">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover rounded-2xl"
				/>
				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						onClick={() => window.open(source_code_link, "_blank")}
					>
						<img
							src={github}
							alt="github"
							className="w-1/2 h-1/2 object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[26px]">{name}</h3>
				<p className="mt-2 text-secondary text-[16px]">{description}</p>
			</div>

            <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                    ))}
                </div>
		</Tilt>
	</motion.div>
);

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant}>
				<p className={styles.sectionSubText}>Mis proyectos</p>
				<h2 className={styles.sectionHeadText}>Proyectos</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]"
				>
					Aquí se reflejarán los proyectos que he ido realizando a lo largo de
					mi carrera, mostgrando mis aptitudes como programador. Cada proyecto
					está enlazado a su repositorio en GitHub.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap justify-evenly gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "works");
