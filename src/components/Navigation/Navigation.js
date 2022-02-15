import { NavStyled, NavLinkStyled } from './Navigation.styled';
const Navigation = () => {
  return (
    <NavStyled>
      <NavLinkStyled exact to="/">
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/movies">Movies</NavLinkStyled>
    </NavStyled>
  );
};

export default Navigation;
