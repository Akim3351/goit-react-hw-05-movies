import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
import propTypes from 'prop-types';

export default function Searchbar({ onSearch }) {
  const [searchQuery, setsearchQuery] = useState('');

  const onFormChange = event => {
    setsearchQuery(event.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Введите запрос для поиска!');
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={onFormSubmit} className={css.searchform}>
      <button type="submit" className={css.searchform__button}>
        <ImSearch />
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        className={css.searchform__input}
        onChange={onFormChange}
        value={searchQuery}
      />
      <ToastContainer />
    </form>
  );
}

Searchbar.propTypes = {
  onSearch: propTypes.func.isRequired,
};
