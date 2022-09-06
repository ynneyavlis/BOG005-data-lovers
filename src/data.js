import data from "./data/ghibli/ghibli.js";

export const calculateAverage = () => {
  let people_movie = [];
  for (let i = 0; i < data.films.length; i++) {
    let movie = data.films[i];
    let numberCharacters = movie.people.length;
    people_movie.push(numberCharacters);
  }

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

// sort

export const sortDateRecent = (datesArray) => {
  return datesArray.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return -1;
    }

    if (a.release_date > b.release_date) {
      return 1;
    }
    return 0;
  });
};

export const sortDateAncient = (datesArray) => {
  return datesArray.sort((a, b) => {
    if (a.release_date < b.release_date) {
      return 1;
    }

    if (a.release_date > b.release_date) {
      return -1;
    }
    return 0;
  });
};
