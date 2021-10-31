import React, {useState} from 'react';
import debounce from '../../utils/debounce';
import { SearchWrapper } from './navbar_styles';
import searchMovies from '../../utils/searchMovies';

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <SearchWrapper>
      I am a Search Bar
    </SearchWrapper>
  );
};

export default SearchBar;