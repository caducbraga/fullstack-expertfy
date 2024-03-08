import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import Logo from "../../assets/logo.png"
import ElementList from '../../components/elementListUser/ElementList'

//exibir listagem de competências após digitar 2 caracteres 
//Listar competência por parte do nome

import './Search.css'

interface Competence {
  id: number;
  name: string;
  description: string;
}

const Search = () => {

  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<Competence[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Competence | null>(null); //sugestão selecionada pelo usuário
  const [expertList, setExpertList] = useState<any[]>([]); //lista de especialistas 
  const [showExpertList, setShowExpertList] = useState(true); //exibir lista de especialistas

  //when user types in the search field
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setSearch(name);

    if (name.length >= 2) {
      getSuggestions(name);
    } else {
      setSuggestions([]);
    }
  };

  //when user clicks on a suggestion, update the search field
  const handleSelectSuggestion = (suggestion: Competence) => {
    setSearch(suggestion.name);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
  }

  const getSuggestions = async (name: string) => {
    try {
      const response = await axios.get(`http://api-expertfy:3000/competence/findByName/${name}`);
      setSuggestions(response.data); // Atualiza as sugestões com os resultados da API
    } catch (error) {
      console.log(error);
    }
  }

  const getExpertList = async () => {
    try {
      const response = await axios.get(`http://api-expertfy:3000/user/listAllByCompetenceId/${selectedSuggestion?.id}`);
      setExpertList(response.data); // Atualiza a lista de especialistas com os resultados da API
      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="search-box">
      {/* Logo */}
      <img src={Logo} alt="Logo ExpertFY" />

      {/*  Search */}
      <div className="search-container">
        <div className="search">
          <input type="text" placeholder="Digite sua pesquisa"
            value={search} onChange={handleInputChange} />
          <button onClick={() => (getExpertList(),setShowExpertList(false))}>🔍</button>
        </div>
        {/* Competence List */}
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion)}>{suggestion.name}</li>
          ))}
        </ul>
      </div>

      {/* Expert List */}
      <div hidden={showExpertList}>
        {expertList.length > 0 ? (
          <ElementList userList={expertList} /> 
        ) : (
          <p>Carregando especialistas...</p>
        )}
      </div>

    </div>
  )
}

export default Search