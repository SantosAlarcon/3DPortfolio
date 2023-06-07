import React from 'react'
import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import cv from "../assets/curriculum.svg"

const Footer = () => {
    return (
        <footer className='mx-auto px-6 py-8 bg-black-100 flex flex-col justify-center max-sm:text-[14px] text-[18px] gap-5'>
            <div className='flex justify-center items-center gap-5'>
                <a href="mailto:santosalarcon86@gmail.com" aria-label="Correo electrónico">
                    <svg id="social" className='w-[36px] h-[36px] hover:scale-125 transition'>
                        <use width="36px" height="36px" href={`${gmail}#social`} alt="Correo electrónico"></use>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/santos-alarcon-asensio" target='_blank' aria-label='LinkedIn'>
                    <svg id="social" className='w-[36px] h-[36px] hover:scale-125 transition'>
                        <use href={`${linkedin}#social`} alt="LinkedIn"></use>
                    </svg>

                </a>
                <a href="https://github.com/SantosAlarcon" target="_blank" aria-label="GitHub">
                    <svg id="social" className='w-[36px] h-[36px] hover:scale-125 transition'>
                        <use width="36px" height="36px" href={`${github}#social`} alt="GitHub" />
                    </svg>
                </a>
                <a href="/CurriculumFullStack.pdf" aria-label="Curriculum Vitae">
                    <svg id="social" className='w-[36px] h-[36px] hover:scale-125 transition'>
                        <use width="36px" height="36px" href={`${cv}#social`} alt="Curriculum Vitae" />
                    </svg>
                </a>
            </div>
            <p className='text-center'>@ {new Date().getFullYear()}  <b>Santos Alarcón Asensio</b> - Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer
