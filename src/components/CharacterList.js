import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const renderCharacters = props.characters.map((character) => {
    return (
      <li key={character.id} className='list_item'>
        <CharacterCard character={character} />
      </li>
    );
  });
  const content =
    props.characters === undefined
      ? 'No hay personajes que coincidan con tu criterio de búsqueda'
      : renderCharacters;
  return <ul className='list'>{content}</ul>;
};

export default CharacterList;
