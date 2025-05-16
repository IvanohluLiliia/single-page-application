import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Sun, Moon } from 'lucide-react';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: transform 0.2s ease;
  font-size: 1.4rem;

  &:hover {
    transform: scale(1.2);
  }
`;

const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <HeaderWrapper>
      <Nav>
        <StyledLink to="/single-page-application/">Про мене</StyledLink>
        <StyledLink to="/single-page-application/my-city">Моє місто</StyledLink>
        <StyledLink to="/single-page-application/my-future">Мій розвиток</StyledLink>
      </Nav>
      <ThemeButton onClick={toggleTheme} aria-label="Змінити тему">
        {isDarkTheme ? <Sun size={22} /> : <Moon size={22} />}
      </ThemeButton>
    </HeaderWrapper>
  );
};

export default Header;
