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
    <Container title={user.name} >
        <CardText>Email : {user.email}</CardText>
        <CardText>Unit Id: {user.unitId}</CardText>
        <CardText>Company Id: {user.companyId}</CardText>
      </Container>
  );
}

export default userCard;