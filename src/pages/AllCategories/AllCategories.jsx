import { useEffect, useState } from "react"
import AllCategoriesCard from "../Home/AllCategories/AllCategoriesCard"
import { useLoaderData } from "react-router-dom"
import "./AllCategories.css"

//This is the NavBar All Categories Pages Link

const AllCategories = () => {
  const [totalcategories, setTotalCategories] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const { count } = useLoaderData()
  const numberOfPages = Math.ceil(count / itemsPerPage)

  // const pages = []
  // for (let i = 0; i < numberOfPages; i++) {
  //   pages.push(i)
  // }
  const pages = [...Array(numberOfPages).keys()]

  /**
   * DONE 1: get the total number of products
   * TODO 2: number of items per page dynamic
   */

  useEffect(() => {
    fetch("http://localhost:5000/allCategories")
      .then((res) => res.json())
      .then((data) => setTotalCategories(data))
  }, [])

  //event change handler
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value)
    console.log(val)
    setItemsPerPage(val)
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {totalcategories.map((item) => (
          <AllCategoriesCard key={item._id} item={item}></AllCategoriesCard>
        ))}
      </div>
      <div className="pagination">
        {pages.map((page) => (
          <button className="btn btn-accent" key={page}>
            {page}
          </button>
        ))}
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

export default AllCategories
