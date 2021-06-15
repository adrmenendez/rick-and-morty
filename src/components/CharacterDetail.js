import React from 'react';

const CharacterDetail = (props) => {
  return (
    <div>
      <div className='detail'>
        <img
          className='detail_img'
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className='detail_data'>
          <h1>{props.character.name}</h1>
          <p>Especie: {props.character.specie}</p>
          <p>Planeta: {props.character.location}</p>
          <p>Episodios: {props.character.episodes}</p>
          <p>Estado: {props.character.status}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
