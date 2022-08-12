import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmitSearch }) => {
  const [input, setInput] = useState('');

  const onInputKey = e => setInput(e.target.value);

  const onSubmitForm = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast.warn('Please, input your query for search!', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    onSubmitSearch(input);
  };

  return (
    <form className={s.form} onSubmit={onSubmitForm}>
      <button type="submit" className={s.button} aria-label="search">
        <ImSearch />
      </button>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={input}
        onChange={onInputKey}
      />
    </form>
  );
};

Searchbar.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};

export default Searchbar;
