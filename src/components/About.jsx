import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import photo from "/FotoSantos.webp"

const ServiceCard = ({ title, icon, index }) => {
    return (
        <Tilt className="xs:w-[250px] w-full select-none">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" loading="lazy" />
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
        <div className="max-sm:overflow-hidden">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introducción</p>
                <h2 className={styles.sectionHeadText}>Sobre mí</h2>
            </motion.div>

            <div className="flex max-sm:flex-col-reverse gap-5">
                <motion.div variants={fadeIn("right", "tween", 0.1, 1)}>
                    <p className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]">
                        Me considero un apasionado <b>desarrollador full-stack junior</b>. Mi devoción por la <b>tecnología</b> y mi <b>curiosidad innata</b> me han llevado a adquirir conocimientos en diferentes áreas del desarrollo web. Desde el <b>diseño de interfaces</b> hasta la implementación de funcionalidades del servidor, ofreciendo una experiencia completa al usuario.
                    </p>

                    <p className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]">
                        Mi enfoque principal es crear aplicaciones web <b>eficientes y atractivas</b>, centrándome en la usabilidad y experiencia del usuario, incluyendo el diseño <b>responsive</b>. Me considero, además, una persona dispuesta a <b>dominar nuevas tecnologías</b> para mejorar mis habilidades, y estoy emocionado por formar parte de un equipo dinámico donde pueda contribuir y crecer profesionalmente.
                    </p>

                    <p className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]">
                        Cuando no estoy programando, soy amante de la <b>cultura japonesa</b> y del <b>frikismo</b>, además de ser amante de la música de los 80s, 90s, música remember, pero sobre todo, <b>del trance</b>.
                    </p>

                    <p className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]">
                        En mi portfolio encontrarás una selección de proyectos en los que he trabajado, donde podrás ver ejemplos concretos de mi trabajo y la forma en que aplico mis habilidades técnicas. Estoy listo para asumir nuevos retos y contribuir en el desarrollo de soluciones innovadoras. ¡Espero tener la oportunidad de colaborar contigo y de hacer realidad ideas increíbles!
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeIn("left", "spring", 0.5, 1)}
                >
                    <img className="rounded-full max-sm:w-[75%] max-sm:mx-auto" alt="Santos Alarcón" src={photo} />
                </motion.div>

            </div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
