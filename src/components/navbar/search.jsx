import React, {useState, useRef, useEffect} from 'react';
import debounce from '../../utils/debounce';
import { SearchWrapper, SearchIcon, SearchInput, SearchContainer } from './navbar_styles';
import searchMovies from '../../utils/searchMovies';
import searchIcon from '../../images/searchicon.png';

const SearchBar = (props) => {
  const [searchTag, setSearchTag] = useState(''); // search input
  const debouncedSearchTag = debounce(searchTag, 500); // search input using the debouncing function
  const [newSearch, setNewSearch] = useState(false); // new search is just being used as a switch to see if a search has already happened

  useEffect(async () => { // triggers a chain of functions to query a search if searchtag.length is greater than 0
    if (searchTag.length > 0) {
      handleUpdate(debouncedSearchTag);
    } else if (searchTag.length === 0 && newSearch) {
      props.setSearchTerm('');
    };
  });

  const handleUpdate = (value) => { // calls the pullMovie function and changes the searchTerm header
    if (value) {
      props.setSearchTerm(value);
      pullMovies(value);
    };
  };

  const pullMovies = async (value) => { // this function utilizes the searchMovies API call to put the response into 'results' in app.js
    await searchMovies(value).then((response) => {
      props.setResults(response);
    });
  };

  const handleInput = () => { // utilizes useState to set whatever is in the input field to searchTag
    return (e) => {
      e.preventDefault();
      setSearchTag(e.target.value);
      setNewSearch(true);
    };
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIcon src={searchIcon}/>
        <SearchInput
          placeholder='Search for a movie'
          value={searchTag}
          onChange={handleInput()}
        />
      </SearchWrapper>
    </SearchContainer>
  );
};

export default SearchBar;