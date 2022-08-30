import data from "./data/ghibli/ghibli.js";

export const calculateAverage = () => {
  let people_movie = [];
  for (let i = 0; i < data.films.length; i++) {
    let movie = data.films[i];
    let numberCharacters = movie.people.length;
    people_movie.push(numberCharacters);
  }
  console.log(people_movie);
  return people_movie;
};

// filter

export const searchFilters = (rawText) => {
  const text = rawText.toLowerCase();
  const movie = data.films.filter((movie) =>
    movie.title.toLowerCase().includes(text)
  );
  return movie;
};

// filter 2

export const GenreFilters = (genre) => {
  const genreText = genre.toLowerCase();
  const movie = data.films.filter((movie) =>
    movie.genre.toLowerCase().includes(genreText)
  );
  return movie;
};
