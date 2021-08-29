import React from 'react';

const SearchForm = (props) => {
  const { posts, searchTerm, setSearchTerm } = props;

  const handleSearch = (ev) => {
    ev.preventDefault();
    console.log(posts);
  }

  return <>
    <form onSubmit={handleSearch}>
      <input placeholder='Search' type='text' value={searchTerm} onChange={(ev) => setSearchTerm(ev.target.value)}/>
      <button type='submit'>Search</button>
    </form>
  </>
}

export default SearchForm;