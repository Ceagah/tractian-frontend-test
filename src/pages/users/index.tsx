import React,{useEffect, useState} from 'react'
import Menu from '../../components/navBar/';
import UserCard from '../../components/userCard/';
import Api from '../../services/api';

import {Container, TitleContainer, Title, Content} from './styles';

interface User {
  id: number;
  name: string;
  email: string;
  unitId: number;
  companyId: number;
}


const Users: React.FC = () => {
  const [users, setUsers] = useState <User[]>([]);

  useEffect(() => {
    Api.get('/users').then(response => {
      setUsers(response.data);
    });
  },[]);

  return (
    <Container>
      <TitleContainer>
        <Title> Users </Title>
      </TitleContainer> 
      <Menu />
      <Content>
        {users.map(user => (
          <UserCard key={user.id} id={user.id} name={user.name} email={user.email} unitId={user.unitId} companyId={user.companyId} />
        ))}
      </Content>
    </Container>
  )
}

export default Users;