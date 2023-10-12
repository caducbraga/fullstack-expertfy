import { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from "../../assets/logo.png"

//exibir listagem de competências após digitar 2 caracteres 
//Listar competência por parte do nome

import './Search.css'

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
    // getUsers()
  }, [])

  return (
    <div className="search-container">
      {/* Logo */}
      <img src={Logo} alt="Logo da Empresa" />

      {/* Campo de Busca e Botão de Pesquisa */}
      <div className="search">
        <input type="text" placeholder="Digite sua pesquisa" />
        <button>🔍</button>
      </div>
    </div>
  )
}

export default Search