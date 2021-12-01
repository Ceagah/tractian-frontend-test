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
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.tertiary};
  border-radius: 30px;
`;
export const DescriptionContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.p`
  color: ${colors.tertiary};
  font-family: ${fonts.primary};
  font-size: 1.5rem;
`;
export const Image = styled.img`
  width: 180px;
  height: 30px;
`;
export const Footer = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
  border: 2px solid ${colors.primary};
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 0;
`;
export const FooterText = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.secondary};
  text-align: center;
  ;
`;