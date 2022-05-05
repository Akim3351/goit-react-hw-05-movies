import axios from 'axios';

export default async function FetchReviews(movieId) {
  const review = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b0b2ab4c759c38b967f7e88f564a31ce`
  );
  return review.data.results;
}
