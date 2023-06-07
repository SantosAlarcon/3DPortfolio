import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import logo from "/LogoTransparente.webp"

const Hero = () => {
    return (
        <section className="relative w-full h-screen max-sm:h-[30rem]">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row justify-center gap-5`}
            >
                    <img className="h-[85%] max-sm:aspect-video max-sm:h-[17rem]" src={logo} alt="logo" loading="lazy" />
            </div>

            {/*<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
            </div>*/}
        </section>
    );
};

export default Hero;
