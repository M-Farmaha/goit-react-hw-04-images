import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchIcon,
  SearchFormInput,
} from '../styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <SearchbarWrap>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchIcon />
        </SearchFormButton>

        <SearchFormInput
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrap>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
