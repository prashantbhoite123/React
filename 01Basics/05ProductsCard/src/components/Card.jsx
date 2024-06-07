import React from "react"

const Card = ({ card }) => (
  <div className="flex max-w-xl cursor-pointer transition-transform transform hover:scale-95 flex-col items-center rounded-lg shadow-xl border border-gray-200 bg-white md:flex-row">
    <div className="h-full rounded-md overflow-hidden w-full md:h-[200px] md:w-[600]">
      <img
        src={card.imgsrc}
        alt="Laptop"
        className="h-[200px] ml-3 w-[400px]  rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover "
      />
    </div>
    <div className="flex flex-col justify-between p-4 md:ml-4">
      <div>
        <h1 className="inline-flex items-center text-lg font-semibold text-gray-800">
          {card.brandName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4 text-gray-600"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </h1>
        <p className="mt-2 text-sm text-gray-600">{card.productname}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full text-lime-400 bg-gray-900 px-3 py-1 text-xs font-semibold">
            RAM {card.details.Ram}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-lime-400">
            SSD {card.details.storage}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-lime-400">
            {card.details.processor}
          </span>
        </div>
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-black">
            {card.price.descPrice}
          </h2>
          <del className="text-sm font-medium text-gray-500">
            {card.price.originalprice}
          </del>
        </div>
        <div className="flex space-x-2">
          <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-2 text-sm font-bold rounded-md">
            ADD TO CART
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-3 py-2 text-white text-sm font-bold rounded-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Card
