import React, { useEffect } from "react"
import { useState } from "react"
import Card from "../components/Card"
// import Card from "../components/Card"

function Productlist() {
  const [product, setProduct] = useState([])
  console.log(product)
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
          {<Card data={data} />}
        </div>
      ))}
    </div>
  )
}

export default Productlist
