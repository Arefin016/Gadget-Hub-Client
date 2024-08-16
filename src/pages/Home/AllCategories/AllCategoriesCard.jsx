const AllCategoriesCard = ({ item }) => {
  const {
    productName,
    productImage,
    description,
    price,
    category,
    ratings,
    productCreationDateTime,
  } = item
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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default AllCategoriesCard
