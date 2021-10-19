import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';
import startSound from '../sounds/netflix-start.mp3'
import { getHomeList, getMovieInfo } from '../services/Api_Tmdb';
import Moviesection from '../components/MovieSection';
import Draftmovie from '../components/DraftMovie';
import Header from '../components/Header';


const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [draftData, setDraftData] = useState(null);
  const [activeHeaderControl, setActiveHeaderControl] = useState(false);

  useEffect(() => {
    const scrollYControl = () => {
      if(window.scrollY > 15) {
        setActiveHeaderControl(true);
      } else {
        setActiveHeaderControl(false);
      }
    }
    window.addEventListener('scroll', scrollYControl);

    return () => {
      window.removeEventListener('scrol', scrollYControl);
    }
  }, []);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      setMovieList(list);

      const originals = list.filter(item => item.pointer === 'originals');
      const randonPickUp = Math.floor(Math.random() * (originals[0].items.results.length));
      const pickedMovie = originals[0].items.results[randonPickUp];
      const choosenMovie = await getMovieInfo(pickedMovie.id, 'tv');
      setDraftData(choosenMovie);
    }
  
    loadAll();
  }, []);
  
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
      <Header control={ activeHeaderControl }/>
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
      <section className="footer">
        <footer>
          <span class="footer__copy" role="img" aria-label="copyRight">
            Direitos de imagem para Netflix &#169; Desenvolvido por MarcosMantovani. All rights reserved<br/>Dados pegos do site ThemovieDB.org
            </span>
        </footer>
      </section>
    </div>
  );
}

export default Home;
