import axios from 'axios';

export default async function FetchCastInfo(movieId) {
  const cast = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b0b2ab4c759c38b967f7e88f564a31ce&language=en-US
`
    )
    .then(res => {
      return res.data.cast.map(item => {
        const { credit_id, character, name, popularity, profile_path } = item;
        return {
          credit_id,
          character,
          name,
          popularity,
          profile_path,
        };
      });
    });
  return cast;
}
