import axios from 'axios';

export default async function GetMovieId(id) {
  const movieById = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US&external_source=imdb_id`
    )
    .then(res => {
      const {
        id,
        title,
        poster_path,
        popularity,
        overview,
        genres,
        backdrop_path,
      } = res.data;

      return {
        id,
        title,
        poster_path,
        popularity,
        overview,
        genres,
        backdrop_path,
      };
    });
  return movieById;
}
