import React from 'react';
import { Container, CardText } from './styles';

interface Company {
  id: number;
  name: string;
}

const CompanyCard = (company: Company )=> {
  return(
    <Container title={company.name} >
      <CardText>Id : {company.id}</CardText>
      </Container>
  );
}

export default CompanyCard;