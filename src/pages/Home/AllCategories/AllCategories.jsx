import { useEffect, useState } from "react"
import AllCategoriesCard from "./AllCategoriesCard"

const AllCategories = () => {
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    fetch("allCategories.json")
      .then((res) => res.json())
      .then((data) => setAllCategories(data))
  }, [])

  return (
    <div>
      <div className="mt-2">
        <h3 className="text-5xl mb-2 text-center  font-bold text-blue-600">
          All Categories
        </h3>
        <p className="text-center">
          Explore a wide range of electronic gadgets, featuring everything from{" "}
          the latest smartphones <br /> to essential accessories for all your
          tech needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {allCategories.map((item) => (
          <AllCategoriesCard key={item._id} item={item}></AllCategoriesCard>
        ))}
      </div>
    </div>
  )
}

export default AllCategories
