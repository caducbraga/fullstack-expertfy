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
    name: '',
    lastName: '',
    birthDate: formatDateForMySQL(new Date()),
    email: '',
    photo: '',
    phone: '',
    linkedin: '',
    team:'',
    employmentStartDate: formatDateForMySQL(new Date()),
    languageId: '',
    seniorityId: '',
    areaId: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        const userData = response.data;

        setFormData({
          name: userData.name,
          lastName: userData.lastName,
          birthDate: userData.birthDate,
          email: userData.email,
          photo: userData.photo,
          phone: userData.phone,
          linkedin: userData.linkedin,
          team: userData.team,
          employmentStartDate: userData.employmentStartDate,
          languageId: userData.languageId,
          seniorityId: userData.seniorityId,
          areaId: userData.areaId,
        });
        console.log(userData);
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

      data.append('name', formData.name);
      data.append('lastName', formData.lastName);
      data.append('birthDate', formData.birthDate);
      data.append('email', formData.email);
      data.append('photo', formData.photo);
      data.append('phone', formData.phone);
      data.append('linkedin', formData.linkedin);
      data.append('team', formData.team);
      data.append('employmentStartDate', formData.employmentStartDate);
      data.append('languageId', formData.languageId);
      data.append('seniorityId', formData.seniorityId);
      data.append('areaId', formData.areaId);

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
        <input type="text" name="team" value={formData.team} onChange={handleInputChange} placeholder="Time" />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditUser;
