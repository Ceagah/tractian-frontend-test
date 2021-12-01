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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Api.get('/users').then(response => {
      setUsers(response.data);
    });
  },[]);

  return (
    <Container>
      <TitleContainer>
        <Title> Tractian Front End Test</Title>
      </TitleContainer>
      <Menu />
      <Content>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </Content>
    </Container>
  )
}

export default Users;