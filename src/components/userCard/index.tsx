import React from 'react';
import { Container, CardText } from './styles';

interface User {
  id: number;
  name: string;
  email: string;
  unitId: number;
  companyId: number;
}

const userCard = (user : User )=> {
  return(
    <Container title={user.name} extra={<a href="#">More</a>}>
        <CardText>{user.email}</CardText>
        <CardText>{user.unitId}</CardText>
      <CardText>{user.companyId}</CardText>
      </Container>
  );
}

export default userCard;