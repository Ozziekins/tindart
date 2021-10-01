import React, { useEffect, useState } from 'react'

function RetrieveSearch() {
  const [items, setItems] = useState([])

  const keyword = window.sessionStorage.getItem('Keyword')

  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${keyword}`)
      .then((res) => res.json())
      .then((result) => {
        setItems(result.data)
      })
  }, [])

  return items
}

export default RetrieveSearch
