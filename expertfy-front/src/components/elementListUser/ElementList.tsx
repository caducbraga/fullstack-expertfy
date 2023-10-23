import React from 'react';

interface Expert {
  id: number;
  name: string;
  seniority: string;
  email: string;
  photo: string;
  competenceCount: number;
}

interface ElementListProps {
  userList: Expert[];
}

const ElementList: React.FC<ElementListProps> = ({ userList }) => {
  return (
    <div className="expert-list">
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {user.name} {user.competenceCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElementList;
