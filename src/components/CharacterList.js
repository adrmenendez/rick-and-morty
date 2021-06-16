import React from 'react';
import CharacterCard from './CharacterCard';
import Warning from './Warning';

const CharacterList = (props) => {
  const renderCharacters = props.characters.map((character) => {
    return (
      <li key={character.id} className='list_item'>
        <CharacterCard character={character} />
      </li>
    );
  });

  const renderListOrWarning =
    props.characters.length !== 0 ? renderCharacters : <Warning />;

  return <ul className='list'>{renderListOrWarning}</ul>;
};

export default CharacterList;
