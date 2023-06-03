import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-auto px-6 py-8 bg-black-100 flex justify-center max-sm:text-[14px] text-[18px]'>
            <p>@ {new Date().getFullYear()}  <b>Santos Alarcón Asensio</b> - Todos los derechos reservados.</p>
        </footer>
  )
}

export default Footer
