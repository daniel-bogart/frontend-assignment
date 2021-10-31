import React from 'react';
import logo from '../../images/logo.svg';
import SearchBar from './search';
import { NavContainer, Logo, NavWrapper} from './navbar_styles';

const Navbar = (props) => {
  const scrollTop = () => { // Hit the Timescale logo to scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavContainer>
      <NavWrapper>
        <Logo src={logo} alt="Timescale Logo" onClick={scrollTop}/>
        <SearchBar setSearchTerm={props.setSearchTerm} setResults={props.setResults}/>
      </NavWrapper>
    </NavContainer>
  )
};

export default Navbar