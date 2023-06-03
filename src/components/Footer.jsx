import React from 'react'
import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import {github}  from "../assets/index"
import cv from "../assets/curriculum.svg"

const Footer = () => {
  return (
    <footer className='mx-auto px-6 py-8 bg-black-100 flex flex-col justify-center max-sm:text-[14px] text-[18px] gap-3'>
            <div className='flex justify-center items-center gap-5'>
               <a href="mailto:santosalarcon86@gmail.com"><img className='h-[48px] hover:scale-125 transition' src={gmail} alt="Correo electrónico" /></a>
               <a href="https://www.linkedin.com/in/santos-alarcon-asensio" target='_blank'><img className='w-[40px] h-[40px] hover:scale-125 transition' src={linkedin} alt="LinkedIn" /></a>
               <a href="https://github.com/SantosAlarcon" target="_blank"><img className='w-[48px] h-[48px] hover:scale-125 transition' src={github} alt="GitHub" /></a>
               <a href="/CurriculumFullStack.pdf"><img className='w-[48px] h-[48px] hover:scale-125 transition' src={cv} alt="Curriculum Vitae" /></a>
            </div>
            <p className='text-center'>@ {new Date().getFullYear()}  <b>Santos Alarcón Asensio</b> - Todos los derechos reservados.</p>
        </footer>
  )
}

export default Footer
