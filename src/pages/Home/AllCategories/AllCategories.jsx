import { useEffect, useState } from "react"
import AllCategoriesCard from "./AllCategoriesCard"
import { Link } from "react-router-dom"
import useAllCategories from "../../../hooks/useAllCategories"

const AllCategories = () => {
  const [dataLength, setDataLength] = useState(6)
  const [asc, setAsc] = useState(true)
  const allCategories = useAllCategories(asc)

  // const [allCategories, setAllCategories] = useState([])
  // useEffect(() => {
  //   fetch("http://localhost:5000/allCategories")
  //     .then((res) => res.json())
  //     .then((data) => setAllCategories(data))
  // }, [])

  return (
    <div>
      <div className="mt-2">
        <h3 className="text-5xl mb-2 text-center font-bold text-blue-600">
          All Categories
        </h3>
        <p className="text-center">
          Explore a wide range of electronic gadgets, featuring everything from{" "}
          the latest smartphones <br /> to essential accessories for all your
          tech needs.
        </p>
        <div className="text-center mt-2">
          <button className="btn btn-accent" onClick={() => setAsc(!asc)}>
            {asc ? "Price: High to Low" : "Price: Low to High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {allCategories.slice(0, dataLength).map((item) => (
          <AllCategoriesCard key={item._id} item={item}></AllCategoriesCard>
        ))}
      </div>
      <div className="md:flex items-center justify-center">
        <Link to="/allCategories">
          <button
            onClick={() => setDataLength(allCategories.length)}
            className="btn btn-outline bg-purple-500 border-0 border-b-4 my-3 text-center"
          >
            All Categories
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AllCategories
