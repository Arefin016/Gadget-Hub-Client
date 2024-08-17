import { useEffect, useState } from "react"
import AllCategoriesCard from "../Home/AllCategories/AllCategoriesCard"
import { useLoaderData } from "react-router-dom"
import "./AllCategories.css"

//This is the NavBar All Categories Pages Link

const AllCategories = () => {
  const [totalcategories, setTotalCategories] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
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
   * DONE 2: number of items per page dynamic
   * TODO 3: get the current page
   */

  useEffect(() => {
    fetch(
      `http://localhost:5000/totalCategories?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setTotalCategories(data))
  }, [currentPage, itemsPerPage])

  //event change handler
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value)
    console.log(val)
    setItemsPerPage(val)
    setCurrentPage(0)
  }

  const handlePrevPage = () => {
    {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
    }
  }

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  // handler search
  const handleSearch = (e) => {
    e.preventDefault()
    const searchText = e.target.search.value
    // console.log(searchText)
    setSearch(searchText)
  }

  return (
    <div>
      {/* search */}
      <div className="text-center">
        <form onSubmit={handleSearch} className="text-center pt-10">
          <input
            className="border border-black p-2"
            type="text"
            name="search"
          />
          <input type="submit" value="Search" className="btn" />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {totalcategories.map((item) => (
          <AllCategoriesCard key={item._id} item={item}></AllCategoriesCard>
        ))}
      </div>
      <div className="pagination">
        <p>Current Page: {currentPage}</p>
        <button onClick={handlePrevPage}>Prev</button>
        {pages.map((page) => (
          <button
            className={currentPage === page && "selected btn"}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
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
