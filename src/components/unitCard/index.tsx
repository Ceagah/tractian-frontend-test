import React from 'react';
import { Container, CardText } from './styles';

interface Unit {
  id: number;
  name: string;
  companyId: number;
}

const UnitCard = (unit: Unit )=> {
  return(
    <Container title={unit.name} >
      <CardText>Id : {unit.id}</CardText>
      <CardText>Company Id : {unit.companyId}</CardText>
      </Container>
  );
}

export default UnitCard;