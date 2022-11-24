import './App.css';
import MovieRow from './MovieRow';
import Banner from './Banner';
import MoviePage from './MoviePage';

const api_key = process.env.REACT_APP_API_KEY;
const base_url = process.env.REACT_APP_BASE_URL;
const request_url = {
  action_and_adventure: `${base_url}discover/movie?api_key=${api_key}&with_genres=27&with_genres=12`,
  anime: `${base_url}discover/movie?api_key=${api_key}&with_genres=16`,
  children_and_family: `${base_url}discover/movie?api_key=${api_key}&with_genres=10751`,
  comedy: `${base_url}discover/movie?api_key=${api_key}&with_genres=35`,
  documentaries: `${base_url}discover/movie?api_key=${api_key}&with_genres=99`,
  drama: `${base_url}discover/movie?api_key=${api_key}&with_genres=18`,
  horror: `${base_url}discover/movie?api_key=${api_key}&with_genres=27`,
  music: `${base_url}discover/movie?api_key=${api_key}&with_genres=10402`,
  romantic: `${base_url}discover/movie?api_key=${api_key}&with_genres=10749`,
  sci_fi: `${base_url}discover/movie?api_key=${api_key}&with_genres=c`,
  thrillers: `${base_url}discover/movie?api_key=${api_key}&with_genres=53`,
  popular_on_netflix: `${base_url}movie/popular?api_key=${api_key}`,
  top_rated: `${base_url}movie/top_rated?api_key=${api_key}`,
  upcoming: `${base_url}movie/upcoming?api_key=${api_key}`,
  trending_now: `${base_url}trending/all/day?api_key=${api_key}`,
  netflix_originals: `${base_url}discover/tv?api_key=${api_key}&with_networks=213`,
  //language: `${base_url}discover/movie?api_key=${api_key}&with_original_language=hi`,
  //similar_movies: `${base_url}movie/{movie_id}/recommendations?api_key=${api_key}`
}

function App() {
  return (
    <div className="App">
      <Banner url={request_url.popular_on_netflix} />
      <MovieRow title="Top Rated" url={request_url.top_rated} />
      <MovieRow title="Netflix Origials" isOriginals="true" url={request_url.netflix_originals} />
      <MovieRow title="Trending Now" url={request_url.trending_now} />
      <MovieRow title="Popular on Netflix" url={request_url.popular_on_netflix} />
      <MovieRow title="Upcoming Movies" url={request_url.upcoming} />
      <MovieRow title="Thriller Movies" url={request_url.thrillers} />
      <MovieRow title="Romantic Movies" url={request_url.romantic} />
      <MovieRow title="Sci-Fi Movies" url={request_url.sci_fi} />
      <MovieRow title="Documentaries" url={request_url.documentaries} />
      <MovieRow title="Action and Adventure" url={request_url.action_and_adventure} />
      <MovieRow title="Horror" url={request_url.horror} />
      <MovieRow title="Children and Family" url={request_url.children_and_family} />
      <MovieRow title="Drama" url={request_url.drama} />
      <MovieRow title="Anime" url={request_url.anime} />
      <MovieRow title="Comedy Movies" url={request_url.comedy} />
      <MovieRow title="Musicals" url={request_url.music} />

    </div>
  );
}

export default App;
