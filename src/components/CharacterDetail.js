import React from 'react';

const CharacterDetail = (props) => {
  let status;
  if (props.character.status === 'Alive') {
    status = <i className='fas fa-hand-spock detail_data--icon'></i>;
  } else if (props.character.status === 'unknown') {
    status = <i className='fas fa-question detail_data--icon'></i>;
  } else {
    status = <i className='fas fa-skull-crossbones detail_data--icon'></i>;
  }

  let specie;
  if (props.character.specie === 'Alien') {
    specie = <i className='fab fa-reddit-alien detail_data--icon'></i>;
  } else {
    specie = <i className='fas fa-male detail_data--icon'></i>;
  }
  return (
    <div className='detail_main'>
      <div className='detail'>
        <img
          className='detail_img'
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className='detail_data'>
          <h1 className='detail_data--name'>{props.character.name}</h1>
          <p>
            <strong>Especie:</strong> {specie}
          </p>
          <p>
            <strong>Planeta:</strong> {props.character.location}
          </p>
          <p>
            <strong>Episodios:</strong> {props.character.episodes}
          </p>
          <p>
            <strong>Estado:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
