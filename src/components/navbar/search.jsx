import React, {useState} from 'react';
import debounce from '../../utils/debounce';
import { SearchWrapper, SearchIcon, SearchInput, SearchContainer } from './navbar_styles';
import searchMovies from '../../utils/searchMovies';
import searchIcon from '../../images/searchicon.png';

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIcon src={searchIcon}/>
        <SearchInput
          placeholder='Search for a movie'
        />
      </SearchWrapper>
    </SearchContainer>
  );
};

export default SearchBar;