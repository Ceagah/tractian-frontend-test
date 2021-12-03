import styled from 'styled-components';
import colors  from '../../styles/colors';
import { Card } from 'antd';

export const Container = styled(Card)`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: ${colors.tertiary};
  border: 3px solid ${colors.primary};
  align-items: center;
  border-radius: 20px;
  padding: 5px 0 10px 10px;
  box-shadow: -8px 3px 8px 5px rgba(250,237,240,0.59);
  margin: 10px 0;
`;
export const CardText = styled.p``;
export const CardImageContainer = styled.div`
  width: 50%;
  height: 100px;
  align-content: center;
  align-self: center;
  border: 1px solid #000;
`;
export const CardImage = styled.image``;

export const ChartContainer = styled.div`
  width: 50%;
  height: 100px
`;