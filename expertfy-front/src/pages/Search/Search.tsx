import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import Logo from "../../assets/logo.png"

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

  const getSuggestions = async (name : string) => {
    try {
      const response = await axios.get(`http://localhost:3000/competence/findByName/${name}`);
      setSuggestions(response.data); // Atualiza as sugestões com os resultados da API
    } catch (error) {
      console.log(error);
    }
  }

  const getExpertList = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/listAllByCompetenceId/${selectedSuggestion?.id}`);
      setExpertList(response.data); // Atualiza a lista de especialistas com os resultados da API
    }
    catch (error) {
      console.log(error);
    }
  }
  


  return (
    <div className="search-box">
      {/* Logo */}
      <img src={Logo} alt="Logo ExpertFY" />

      {/* Campo de Busca e Botão de Pesquisa */}
      <div className="search-container">
        <div className="search">
          <input type="text" placeholder="Digite sua pesquisa"
          value={search} onChange={handleInputChange}/>
          <button onClick={() => getExpertList()}>🔍</button>
        </div>
        {/* Lista de Competências */}
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}
            onClick={() => handleSelectSuggestion(suggestion)}>{suggestion.name}</li>
          ))}
        </ul>
      </div>
        
        {/* Lista de Especialistas */}
        <div className="expert-list">
          <ul>
            {expertList.map((expert) => (
              <li key={expert.id}>{expert.name} {expert.competenceCount}</li>
              //Todo: criar componente que recebe uma lista de especialistas e exibe os dados
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Search