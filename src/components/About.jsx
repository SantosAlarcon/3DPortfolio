import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc"

const ServiceCard = ({ title, icon, index }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introducción</p>
				<h2 className={styles.sectionHeadText}>Resúmen</h2>
			</motion.div>

			<motion.p
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				variants={fadeIn("", "", 0.1, 1)}
			>
				Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
				enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
				exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
				nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
				minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure
				elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor
				Lorem duis laboris cupidatat officia voluptate. Culpa proident
				adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
				Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
				Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa
				et culpa duis.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
