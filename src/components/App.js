import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
//styles
import '../styles/App.scss';
//services
import getApiData from '../services/api';
//components
import CharacterList from './CharacterList';
import NameFilter from './NameFilter';
import CharacterDetail from './CharacterDetail';
import Warning from './Warning';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getApiData().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacters(orderedData);
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleFilter = (data) => {
    setFilterName(data.value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacterDetail = (routerProps) => {
    const matchId = routerProps.match.params.characterId;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(matchId)
    );
    return <CharacterDetail character={foundCharacter} />;
  };

  const renderListOrWarning = () => {
    return characters !== undefined ? (
      <CharacterList characters={filteredCharacters} />
    ) : (
      <Warning />
    );
  };

  return (
    <div className='main'>
      <h1>Rick and Morty</h1>
      <Switch>
        <Route exact path='/'>
          <form onSubmit={submitHandler}>
            <NameFilter handleFilter={handleFilter} />
          </form>
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
