import React from "react"

const Card = ({ card }) => {
  return (
    <div className="relative w-64 h-96 rounded-lg">
      <img
        src={card.imgSrc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{card.name}</h1>
        <p className="mt-2 text-sm text-gray-300">{card.desc}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {"visit Me "} →
        </button>
      </div>
    </div>
  )
}

export default Card
