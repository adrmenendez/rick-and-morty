import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
//styles
import '../styles/App.scss';
//services
import getApiData from '../services/api';
import ls from '../services/storage';
//components
import CharacterList from './CharacterList';
import NameFilter from './NameFilter';
import CharacterDetail from './CharacterDetail';
import Warning from './Warning';

function App() {
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filterName, setFilterName] = useState('');

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

  useEffect(() => {
    ls.set('characters', characters);
  }, [characters]);

  const handleFilter = (data) => {
    setFilterName(data.value);
    ls.set('filterName', data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacterDetail = (routerProps) => {
    const matchId = routerProps.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(matchId)
    );
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <Warning />;
    }
  };

  const renderListOrWarning = () => {
    if (filteredCharacters.length !== 0) {
      return <CharacterList characters={filteredCharacters} />;
    } else {
      return <Warning />;
    }
  };

  return (
    <div className='main'>
      <Switch>
        <Route exact path='/'>
          <h1 className='main_title'>Rick and Morty</h1>
          <NameFilter handleFilter={handleFilter} value={filterName} />
          {renderListOrWarning()}
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
