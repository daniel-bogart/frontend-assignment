import React from 'react';
import logo from '../../images/logo.svg';
import SearchBar from './search';
import { NavContainer, Logo, NavWrapper} from './navbar_styles';

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <Logo src={logo}/>
        <SearchBar/>
      </NavWrapper>
    </NavContainer>
  )
};

export default Navbar