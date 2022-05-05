import axios from 'axios';

export async function searchMovies(query) {
  const searchMovs = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US&query=${query}&page=1&include_adult=false`
    )
    .then(res => {
      const moviesArray = res.data.results.map(result => {
        const { id, title } = result;
        return {
          id,
          title,
        };
      });
      return moviesArray;
    });
  return searchMovs;
}
