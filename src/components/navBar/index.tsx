import React from 'react'
import { UserOutlined, BarChartOutlined,TeamOutlined } from '@ant-design/icons';
import { Container, Nav, NavItem} from './styles';

const NavBar = () => {
  return (
    <Container>
      <Nav mode="inline">
        <Nav.Item key="user" icon={<UserOutlined />}>
          <NavItem to="/users">Users</NavItem>
        </Nav.Item>        
        <Nav.Item key="actives" icon={<BarChartOutlined/>}>
          <NavItem to="/actives"> Actives</NavItem>
        </Nav.Item>
        <Nav.Item key="companies" icon={<TeamOutlined />}>
          <NavItem to="/companies"> Companies</NavItem>
        </Nav.Item>
      </Nav>
    </Container>
  )
}

export default NavBar;