import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import startSound from '../sounds/netflix-start.mp3'
import { getHomeList } from '../services/Api_Tmdb';
import Moviesection from '../components/MovieSection';
import Draftmovie from '../components/DraftMovie';


const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [draftData, setDraftData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter(item => item.pointer === 'originals');
      const randonPickUp = Math.floor(Math.random() * (originals[0].items.results.length));
      const pickedMovie = originals[0].items.results[randonPickUp];
      console.log(pickedMovie)
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
      { draftData && 
          <Draftmovie item={ draftData }/>
      }
      <section className="lists">
        {
          movieList.map((item, index) => (
              <Moviesection key={ index } title={ item.title } list={ item.items }/>
          ))
        }
      </section>
    </div>
  );
}

export default Home;
