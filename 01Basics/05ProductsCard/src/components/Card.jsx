import React from "react"

function Card({ card }) {
  console.log(card)
  return (
    <div class="flex max-w-2xl mt-3 flex-col items-center rounded-md border md:flex-row">
      <div class="h-full w-full md:h-[200px] md:w-[300px]">
        <img
          src={card.imgsrc}
          alt="Laptop"
          class="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold">
            {card.brandName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2 h-4 w-4"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </h1>
          <p class="mt-3 text-sm text-gray-600">{card.productname}</p>
          <div class="mt-4">
            <span class="mb-2 mr-2 inline-block text-sm rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              RAM {card.details.Ram}
            </span>
            <span class="mb-2 mr-2 inline-block text-sm rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              SSD {card.details.storage}
            </span>
            <span class="mb-2 mr-2 inline-block text-sm rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {card.details.processor}
            </span>
          </div>
          <div class="mt-3 flex items-center space-x-2">
            <span class="flex flex-col">
              <h2 class="text-[10px] font-bold text-xl text-black">
                {card.price.descPrice}
              </h2>
              <del class="text-[8px] font-medium text-sm text-gray-500">
                {card.price.originalprice}
              </del>
            </span>
            <div>
              <button className="mx-6 bg-yellow-400 px-3 py-2 text-sm font-bold">
                ADD TO CART
              </button>
              <button className="mx-6 bg-orange-500 px-3 py-2  text-white text-sm font-bold">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
