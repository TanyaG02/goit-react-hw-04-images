import { useState } from 'react';
import { FcCameraIdentification } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  SearchbarHead,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchItem, setSearchItem] = useState('');

  const handleSearchChange = event => {
    setSearchItem(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchItem.trim() === '') {
      toast.error('Oops, somethings wrong!');
      setSearchItem('');
      return;
    }
    onSubmit(searchItem);
    setSearchItem('');
  };

  return (
    <SearchbarHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcCameraIdentification size={20} /> <span>Search</span>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchItem}
          onChange={handleSearchChange}
        />
      </SearchForm>
    </SearchbarHead>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
