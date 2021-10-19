const API_KEY = '156438921b57666fdf2c84a358ccba0a';
const INITIAL_ENDPOINT = 'https://api.themoviedb.org/3';

const initialFetch = async (ENDPOINT) => {
  const response = await fetch(`${INITIAL_ENDPOINT}${ENDPOINT}`);
  const data = await response.json();
  return data;
}

const getHomeList = async () => {
    return [
        {
          pointer: 'originals',
          title: 'NetFlix',
          items: await initialFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'trending',
          title: 'Recomendados',
          items: await initialFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'toprated',
          title: 'Em Alta',
          items: await initialFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'action',
          title: 'Ação',
          items: await initialFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'comedy',
          title: 'Comédia',
          items: await initialFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'horror',
          title: 'Terror',
          items: await initialFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'romance',
          title: 'Romance',
          items: await initialFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
          pointer: 'documentary',
          title: 'Documentários',
          items: await initialFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
      ]
  }

  const getMovieInfo = async (movieId, type) => {
    let info = {};
      if(movieId) {
        switch(type) {
          case 'movie':
              info = await initialFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
          case 'tv':
            info = await initialFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            break;
          default:
              info = "error at request api";
            break;
        }
      }
    return info;
  }

export {
  getHomeList,
  getMovieInfo
}