import React,{useState, useEffect} from 'react';
import Menu from '../../components/navBar/';
import ActiveCard from '../../components/activesCard'; 
import Api from '../../services/api';

import { Container, TitleContainer, Title, Content } from './styles';


interface Metrics {
  lastUptimeAt: Date;
  totalCollectsUptime: number;
  totalUptime: number;
}
interface Sensors {
  name: string;
}
interface Specifications {
  maxTemp: number;
}

interface Active {
  id: number;
  companyId: number;
  healthscore: number;
  image: string;
  metrics: Metrics;
  model: string;
  name: string;
  sensors: Sensors[];
  specifications: Specifications;
  status: string;
  unitId: number;
}

const Actives: React.FC = () => {

  const [actives, setActives] = useState<Active[]>([]);

  useEffect(() => {
    Api.get('/assets').then(response => {
      setActives(response.data);
      console.log('Actives :', response.data);
    });
  },[]);
  
  return(
    <Container>
      <TitleContainer>
        <Title> Actives </Title>
      </TitleContainer>
      <Menu />
      <Content>
      {actives.map(active => (
        <ActiveCard key={active.id} id={active.id} companyId={active.companyId} healthscore={active.healthscore} image={active.image} metrics={active.metrics}
        model={active.model} name={active.name} sensors={active.sensors} specifications={active.specifications} status={active.status} unitId={active.unitId} />
      ))}
      </Content>
    </Container>
  );
}

export default Actives;