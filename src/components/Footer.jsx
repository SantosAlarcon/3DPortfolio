import React from "react"
import gmail from "../assets/gmail.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import cv from "../assets/curriculum.svg"

const Footer = () => {
  return (
    <footer className="mx-auto px-6 py-8 bg-black-100 flex flex-col justify-center max-sm:text-[14px] text-[18px] gap-5">
      <div className="flex justify-center items-center gap-5 z-40">
        <a
          href="mailto:santosalarcon86@gmail.com"
          aria-label="Correo electrónico"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="social"
            fill="currentColor"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            className="w-[36px] h-[36px] hover:scale-125 transition"
          >
            <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/santos-alarcon-asensio"
          target="_blank"
          aria-label="LinkedIn"
        >
          <svg
            id="social"
            className="w-[36px] h-[36px] hover:scale-125 transition"
          >
            <use href={`${linkedin}#social`} alt="LinkedIn"></use>
          </svg>
        </a>
        <a
          href="https://github.com/SantosAlarcon"
          target="_blank"
          aria-label="GitHub"
        >
          <svg
            id="social"
            className="w-[36px] h-[36px] hover:scale-125 transition"
          >
            <use
              width="36px"
              height="36px"
              href={`${github}#social`}
              alt="GitHub"
            />
          </svg>
        </a>
        <a href="/CurriculumFullStack.pdf" aria-label="Curriculum Vitae">
          <svg
            id="social"
            className="w-[36px] h-[36px] hover:scale-125 transition"
          >
            <use
              width="36px"
              height="36px"
              href={`${cv}#social`}
              alt="Curriculum Vitae"
            />
          </svg>
        </a>
      </div>
      <p className="text-center">
        @ {new Date().getFullYear()} <b>Santos Alarcón Asensio</b> - Todos los
        derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
