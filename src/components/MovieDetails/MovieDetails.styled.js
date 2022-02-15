import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SectionStyled = styled.section`
  padding: 20px;
`;

export const LinksWrapperStyled = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  transition: color 250ms linear;
  color: #f2e310;
  &.active {
    color: #3807fd;
  }
`;
