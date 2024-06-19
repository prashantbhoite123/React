import React, { useEffect } from "react"
import { useState } from "react"
// import Card from "../components/Card"

function Productlist() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products")

    const Data = await res.json()
    setProduct(Data)
    console.log(Data[0])
    console.log(Data[0].title)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {product.map((data) => (
        <div
          key={data.id}
          className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={data.image}
              alt=""
            />
          </a>
          <div className="p-4">
            {" "}
            {/* Adjusted padding */}
            <a href="#">
              <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {data.category}
              </h5>
            </a>
            <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              {data.title}
            </p>
            <div className="w-full mb-2 h-32 overflow-hidden">
              {" "}
              {/* Adjusted image container */}
              <img
                className="w-full h-full object-cover"
                src={data.image}
                alt=""
              />
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Productlist
