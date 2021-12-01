import React from 'react'
import Logo from '../../assets/logo.png';
import {
  Container, 
  TitleContainer,
  Title, 
  Content, 
  DescriptionContainer,
  Description, 
  Image,  
  Footer, 
  FooterText
} from "./styles"; 

import Menu from '../../components/navBar/';

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <Title> Tractian Front End Test</Title>
      </TitleContainer>
      <Menu />
      <Content>
        <DescriptionContainer>
          <Image src={Logo} />
          <Description>
            Monitoramento Online e Gestão de Ativos em um só lugar
          </Description>
        </DescriptionContainer>
      </Content>
      <Footer>
        <FooterText>
          Create with ♥ By Carlos Henrique
        </FooterText>
      </Footer>
    </Container>
  )
}

export default Home;