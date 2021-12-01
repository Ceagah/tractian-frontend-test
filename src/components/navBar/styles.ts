import styled from 'styled-components';
import colors from '../../styles/colors';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';

export const Container = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
`;

export const Nav = styled(Menu)`
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${colors.tertiary};
  &&:hover {
    color: ${colors.secondary};
  }

`;

