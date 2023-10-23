import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import './RegisterUser.css';

// Função para formatar a data no formato YYYY-MM-DD
const formatDateForMySQL = (date : Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  const day = date.getDate().toString().padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  return `${year}-${month}-${day}`;

}
const RegisterUser = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    photo: null, // File
    seniority: '',
    employmentStartDate: formatDateForMySQL(new Date()),
    languages: [],
    phone: '',
    email: '',
    linkedin: '',
    name: '',
    lastName: '',
    birthDate: formatDateForMySQL(new Date()),
  });

  // when user types in the input field
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? (files ? files[0] : null) : value,
    }));
  };

  // when user clicks on the submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendFormData();
  };

  const sendFormData = async () => {
    try {
      await axios.post('http://localhost:3000/user', formData);
    } catch (error) {
      console.log(error);
    }
  }

  //TODO: implementar verificação de campos obrigatórios


  return (
    <div className='register-user-form'>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome" />
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
        <input type="file" name="photo" onChange={handleInputChange} />
        <input type="text" name="seniority" value={formData.seniority} onChange={handleInputChange} placeholder="Seniority" />
        {/* Adicione os campos restantes aqui */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
