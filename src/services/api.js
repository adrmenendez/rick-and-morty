const getApiData = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          specie: character.species,
          status: character.status,
          location: character.location.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getApiData;
