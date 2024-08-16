import { useEffect, useState } from "react"
import AllCategoriesCard from "../Home/AllCategories/AllCategoriesCard"

const AllCategories = () => {
  const [totalcategories, setTotalCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/allCategories")
      .then((res) => res.json())
      .then((data) => setTotalCategories(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
      {totalcategories.map((item) => (
        <AllCategoriesCard key={item._id} item={item}></AllCategoriesCard>
      ))}
    </div>
  )
}

export default AllCategories
