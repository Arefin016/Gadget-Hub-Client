import { useLoaderData } from "react-router-dom"

const AllCateDetailsPage = () => {
  const allCategories = useLoaderData()
  const { productName, productImage, description, price, category } =
    allCategories
  return (
    <div className="card card-side bg-base-100 shadow-xl my-4 grid grid-cols-1 md:flex lg:flex">
      <figure>
        <img src={productImage} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{productName}</h2>
        <p className="text-xl">Desc:{description}</p>
        <p className="text-xl">$ {price}</p>
        <p className="text-xl">Category: {category}</p>
      </div>
    </div>
  )
}

export default AllCateDetailsPage
