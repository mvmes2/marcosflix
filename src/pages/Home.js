import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import startSound from '../sounds/netflix-start.mp3'
import { getHomeList } from '../services/Api_Tmdb';


const Home = () => {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);
    }
  
    loadAll();
  }, [])
  
  const sfx = {
    main: new Howl({
      src: [startSound],
      volume: 0.15,
      loop: false,
    })
  }
  
  function playMain() {
      sfx.main.play();
  }

  return (
    <div className="page">
      { movieList !== null && playMain() }
      asidjasiodjasdiasjdisjasoidjas
    </div>
  );
}

export default Home;
