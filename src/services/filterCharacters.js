const filteredCharacters = (array, name, specie) =>
  array
    .filter((element) => {
      return element.name.toLowerCase().includes(name.toLowerCase());
    })
    .filter((element) => {
      return specie === '' ? true : element.specie === specie;
    });

export default filteredCharacters;
