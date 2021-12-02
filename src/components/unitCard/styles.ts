import styled from 'styled-components';
import colors  from '../../styles/colors';
import { Card } from 'antd';

export const Container = styled(Card)`
  width: 40%;
  height: 20%;
  display: flex;
  flex-direction: column;
  background: ${colors.tertiary};
  border: 3px solid ${colors.primary};
  border-radius: 20px;
  padding: 5px 0 0px 10px;
  box-shadow: -8px 3px 8px 5px rgba(250,237,240,0.59);
`;
export const CardText = styled.p``;