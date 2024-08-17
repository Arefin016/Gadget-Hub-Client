import { useEffect, useState } from "react"

const useAllCategories = (asc) => {
  const [allCategories, setAllCategories] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/allCategories?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setAllCategories(data))
  }, [asc])

  return allCategories
}

export default useAllCategories
