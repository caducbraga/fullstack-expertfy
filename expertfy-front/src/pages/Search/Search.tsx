import { useState, useEffect } from 'react'
import axios from 'axios'

//exibir listagem de competências após digitar 2 caracteres 
//Listar competência por parte do nome

const Search = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>Search</div>
  )
}

export default Search