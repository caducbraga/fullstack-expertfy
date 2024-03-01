import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditUser.css';


const formatDateForMySQL = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const EditUser = () => {

  const { id } = useParams();
  
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
    team: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        const userData = response.data;

        setFormData({
          login: userData.login,
          password: userData.password,
          seniority: userData.seniority,
          employmentStartDate: userData.employmentStartDate,
          languages: userData.languages,
          phone: userData.phone,
          email: userData.email,
          linkedin: userData.linkedin,
          name: userData.name,
          lastName: userData.lastName,
          birthDate: userData.birthDate,
          team: userData.team,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendFormData();
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

      const response = await axios.put(`http://localhost:3000/user/${id}`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='edit-user-form'>
      <h1>Editar Informações do Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome" />
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
        <input type="text" name="seniority" value={formData.seniority} onChange={handleInputChange} placeholder="Seniority" />
        <input type="text" name="team" value={formData.team} onChange={handleInputChange} placeholder="Time" />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditUser;
