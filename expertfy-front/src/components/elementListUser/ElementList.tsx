import React from 'react';
import './ElementList.css';

interface Expert {
  id: number;
  name: string;
  seniority: string;
  email: string;
  photo: Object; //blob
  competenceCount: number;
}

interface ElementListProps {
  userList: Expert[];
}



const blobToImage = (theBlob: any): string => {
  if (!theBlob) return '';

  const bufferData = theBlob.data; // Extraia os dados da imagem

  // Crie um Blob a partir dos dados
  const imageBlob = new Blob([bufferData], { type: 'image/jpeg' }); // Substitua 'image/jpeg' pelo tipo de imagem apropriado

  // Converta o Blob em uma URL
  const blobUrl = URL.createObjectURL(imageBlob);

  return blobUrl;
}


const ElementList: React.FC<ElementListProps> = ({ userList }) => {
  return (
    <div className="expert-list">
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <div className='user-name'>
              {user.name}
            </div>
            <div className='user-seniority'>
              {user.seniority}
            </div>
            <div className='user-email'>
              {user.email}
            </div>
            <div className='user-photo'>
              <img src={blobToImage(user.photo)} alt={user.name} />
            </div>
            <div className='user-competence-count'>
              {user.competenceCount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ElementList;
