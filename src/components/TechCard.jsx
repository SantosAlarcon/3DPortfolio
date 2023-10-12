import React from 'react'

const TechCard = ({image, title}) => {
  return (
    <div className="m-2 rounded-2xl border-white hover:scale-125 hover:rotate-12 hover:drop-shadow-[0_0_1em_#66f] transition-all duration-300 cursor-pointer">
        <img src={image} title={title} />
    </div>
  )
}

export default TechCard
