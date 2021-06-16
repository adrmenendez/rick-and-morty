import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import getApiData from '../services/api';
import ls from '../services/storage';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';
import Warning from './Warning';

function App() {
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('');

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((data) => {
        const orderedData = data.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setCharacters(orderedData);
      });
    }
  }, [characters.length]);
  useEffect(() => ls.set('characters', characters), [characters]);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
      ls.set('filterName', data.value);
    } else {
      setFilterSpecie(data.value);
      ls.set('filterSpecie', data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterSpecie === '' ? true : character.specie === filterSpecie;
    });

  const renderCharacterDetail = (routerProps) => {
    const matchId = routerProps.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(matchId)
    );
    return foundCharacter !== undefined ? (
      <CharacterDetail character={foundCharacter} />
    ) : (
      <Warning />
    );
  };

  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>
          <h1 className='main_title'>Rick and Morty</h1>
          <Filters handleFilter={handleFilter} value={filterName} />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route
          path='/character/:characterId'
          component={renderCharacterDetail}
        />
      </Switch>
    </div>
  );
}

export default App;
