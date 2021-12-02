import React,{useEffect, useState} from 'react'
import Menu from '../../components/navBar/';
import CompanyCard from '../../components/companyCard/';
import UnitCard from '../../components/unitCard/';
import Api from '../../services/api';

import {Container, TitleContainer, Title, Content} from './styles';

interface Company {
  id: number;
  name: string;
}

interface Unit {
  id: number;
  name: string;
  companyId: number;
}


const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    Api.get('/companies').then(response => {
      setCompanies(response.data);
    });
  },[]);
  useEffect(() => {
    Api.get('/units').then(response => {
      setUnits(response.data);
    });
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title> Companies and Units</Title>
      </TitleContainer> 
      <Menu />
      <Content>
        {companies.map(company => (
          <CompanyCard key={company.id} name={company.name} id={company.id} />
        ))}
        {units.map(unit => (
          <UnitCard key={unit.id} name={unit.name} id={unit.id} companyId={unit.companyId} />
        ))}
      </Content>
    </Container>
  )
}

export default Companies;