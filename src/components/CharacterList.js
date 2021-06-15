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

  return <ul className='list'>{renderCharacters}</ul>;
};

export default CharacterList;
