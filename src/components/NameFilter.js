import React from 'react';
import ls from '../services/storage';

const NameFilter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    ls.set('filterName', ev.target.value);
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler} className='form'>
        <label className='form_label' htmlFor='name'>
          Busca un personaje:
        </label>
        <input
          className='form_input'
          type='text'
          name='name'
          id='name'
          placeholder='Rick...'
          value={props.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default NameFilter;
