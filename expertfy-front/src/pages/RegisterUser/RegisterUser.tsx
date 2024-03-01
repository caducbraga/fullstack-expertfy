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
    seniority: '',
    employmentStartDate: formatDateForMySQL(new Date()),
    languages: [],
    phone: '',
    email: '',
    linkedin: '',
    name: '',
    lastName: '',
    birthDate: formatDateForMySQL(new Date()),
    team:'',
  });

  // const [photo, setPhoto] = useState<Blob>();

  // when user types in the input field
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setPhoto(file);
  // }

  // when user clicks on the submit button
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendFormData();
    //!TODO: salvar a foto no backend

  };

  const sendFormData = async () => {
    try {
      const data = new FormData();
      
      data.append('login', formData.login);
      data.append('password', formData.password);
      data.append('seniority', formData.seniority);
      data.append('employmentStartDate', formData.employmentStartDate);
      data.append('languages', formData.languages.toString());
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('linkedin', formData.linkedin);
      data.append('name', formData.name);
      data.append('lastName', formData.lastName);
      data.append('birthDate', formData.birthDate);
      data.append('team', formData.team);
      
      const response = await axios.post('http://localhost:3000/user', data);
      console.log(response);
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
        {/* <input type="file" name="photo" onChange={handlePhotoChange} /> */}
        <input type="text" name="seniority" value={formData.seniority} onChange={handleInputChange} placeholder="Seniority" />
        <input type="text" name="team" value={formData.team} onChange={handleInputChange} placeholder="Time" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
