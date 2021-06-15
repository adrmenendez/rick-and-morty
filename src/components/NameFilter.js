import React from 'react';

const NameFilter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <>
      <label className='form_label' htmlFor='name'>
        Escribe un nombre
      </label>
      <input
        className='form_input'
        type='text'
        name='name'
        id='name'
        placeholder='Rick'
        onChange={handleChange}
      />
    </>
  );
};

export default NameFilter;
