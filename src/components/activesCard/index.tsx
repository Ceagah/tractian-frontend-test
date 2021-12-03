import React from 'react';
import * as Highcharts from 'highcharts';
import AccessibilityModule from 'highcharts/modules/accessibility';
import { Container, CardText, CardImage, CardImageContainer, ChartContainer} from './styles';


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
  companyId: number;
  healthscore: number;
  id: number;
  image: string;
  metrics: Metrics;
  model: string;
  name: string;
  sensors: Sensors[];
  specifications: Specifications;
  status: string;
  unitId: number;
}

const ActiveCard = (active: Active )=> {

  const ImageChart = Highcharts.chart("chart", {
  chart: {
    type: 'area',
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Specifications'
  },
  xAxis: {
    categories: ['Max Temp', 'Healthscore', 'totalCollectsUptime', 'totalUptime', 'status'],
  },
  yAxis: {
    title: {
      text: 'Value'
    }
  },
  series: [{
    data: [1, 0, 4]
  }, {
    data: [5, 7, 3]
  }]
});

  return(
    <Container title={active.name} >
      <CardText><strong>Id :</strong> {active.id}</CardText>
      <CardText><strong>Company Id :</strong> {active.companyId}</CardText>
      <CardImageContainer>
        {/* <CardImage src={require(active.image)} /> */}
      </CardImageContainer>
      <CardText><strong>Status :</strong> {active.status}</CardText>
      <CardText><strong>Model :</strong> {active.model}</CardText>
      <CardText><strong>Unit Id :</strong> {active.unitId}</CardText>
      <CardText><strong>Max Temp :</strong> {active.specifications.maxTemp}º</CardText>
      <CardText><strong>Last Uptime :</strong> {active.metrics.lastUptimeAt}</CardText>
      <ChartContainer id="chart">
        {ImageChart}
      </ChartContainer>
    </Container>
  );
}

export default ActiveCard;