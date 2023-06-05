import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
    return (
        <section className="relative w-full h-screen">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hola, me llamo <span className="text-[#915eff]">Santos</span> 🖖
                    </h1>
                    <div className={`${styles.heroSubText} mt-2 text-white-100`}>
                        <p className="mb-4">
                            Me considero un apasionado <b>desarrollador full-stack junior</b>. Mi devoción por la <b>tecnología</b> y mi <b>curiosidad innata</b> me han llevado a adquirir conocimientos en diferentes áreas del desarrollo web. Desde el <b>diseño de interfaces</b> hasta la implementación de funcionalidades del servidor, ofreciendo una experiencia completa al usuario.</p>

                        <p className="mb-4">Mi enfoque principal es crear aplicaciones web <b>eficientes y atractivas</b>, centrándome en la usabilidad y experiencia del usuario, incluyendo el diseño <b>responsive</b>. Me considero, además, una persona dispuesta a <b>dominar nuevas tecnologías</b> para mejorar mis habilidades, y estoy emocionado por formar parte de un equipo dinámico donde pueda contribuir y crecer profesionalmente.</p>

                        <p className="mb-4">Cuando no estoy programando, soy amante de la <b>cultura japonesa</b> y del <b>frikismo</b>, además de ser amante de la música de los 80s, 90s, música remember, pero sobre todo, <b>del trance</b>.
                        </p>

                        <p className="mb-4">En mi portfolio encontrarás una selección de proyectos en los que he trabajado, donde podrás ver ejemplos concretos de mi trabajo y la forma en que aplico mis habilidades técnicas. Estoy listo para asumir nuevos retos y contribuir en el desarrollo de soluciones innovadoras. ¡Espero tener la oportunidad de colaborar contigo y de hacer realidad ideas increíbles!</p>
                    </div>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section >
    );
};

export default Hero;
