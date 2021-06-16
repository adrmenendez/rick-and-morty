import React from 'react';

const SpecieFilter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'specie',
    });
  };

  return (
    <>
      <select
        className='form_input'
        type='text'
        name='name'
        id='name'
        placeholder='Rick...'
        value={props.value}
        onChange={handleChange}
      >
        <option value=''>Selecciona una especie</option>
        <option value='Human'>Humano</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};

export default SpecieFilter;
