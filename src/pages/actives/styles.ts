import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;
export const TitleContainer = styled.div`
  display:flex;
  justify-content: center;
  background-color: ${colors.background};

`;

export const Title = styled.h1`
  color: ${colors.tertiary}
`;

export const Content = styled.main`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;