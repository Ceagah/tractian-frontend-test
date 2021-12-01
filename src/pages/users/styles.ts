import styled from 'styled-components';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;
export const TitleContainer = styled.div`
  width: 100vw;
  display:flex;
  justify-content: center;
  background-color: ${colors.background};

`;

export const Title = styled.h1`
  color: ${colors.tertiary}
`;

export const Content = styled.main`
  width: 90vw;
  height: 85vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;