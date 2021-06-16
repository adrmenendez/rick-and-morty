import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character/${props.character.id}`}>
        <img
          className='list_item--img'
          src={props.character.image}
          alt={props.character.name}
        />
        <div className='list_item--data'>
          <h2 className='list_item--name'>{props.character.name}</h2>
          <p className='list_item--specie'>{props.character.specie}</p>
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
