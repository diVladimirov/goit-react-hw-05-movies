import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #10a446;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  transition: color 300ms ease-in-out;
  color: #f2e310;
  &.active {
    color: #3807fd;
  }
`;
