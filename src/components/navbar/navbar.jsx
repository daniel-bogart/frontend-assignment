import React from 'react';
import logo from '../../images/logo.svg';
import SearchBar from './search';
import { NavContainer, Logo, NavWrapper} from './navbar_styles';

const Navbar = (props) => {
  const resetPage = () => { // clearing the search and scrolling back to the top gives the impression of a clean reset of the page
    props.setSearchTerm([]);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NavContainer>
      <NavWrapper>
        <Logo src={logo} alt="Timescale Logo" onClick={resetPage}/>
        <SearchBar setSearchTerm={props.setSearchTerm} setResults={props.setResults}/>
      </NavWrapper>
    </NavContainer>
  )
};

export default Navbar