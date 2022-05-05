import axios from 'axios';

export async function fetchTrendMovies() {
  const trendingMovs = await axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=b0b2ab4c759c38b967f7e88f564a31ce'
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
  return trendingMovs;
}
