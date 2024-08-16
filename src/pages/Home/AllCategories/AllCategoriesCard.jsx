import { Link } from "react-router-dom"

const AllCategoriesCard = ({ item }) => {
  const { productName, productImage, description, price, category, _id } = item
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>Desc: {description}</p>
        <p>Price: ${price}</p>
        <h2>Category: {category}</h2>
        <div className="card-actions">
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-accent">Purchase Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AllCategoriesCard
