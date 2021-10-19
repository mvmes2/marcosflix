import React, { useState } from 'react';

const Moviesection = ({ title, list }) => {
  const [scrollX, setScrollX] = useState(0);

  function leftArrowHandler() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function rightArrowHandler() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = list.results.length * 150;
  
    if((window.innerWidth - listWidth) > x) {
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="moviesection">
      <h2>{title}</h2>
        <div className="moviesection-leftArrow" onClick={ leftArrowHandler }>
        <i className="uil uil-angle-left-b moviesection-leftArrow-img"></i>
        </div>
        <div className="moviesection-rightArrow" onClick={ rightArrowHandler }>
        <i className="uil uil-angle-right-b moviesection-rightArrow-img"></i>
        </div>
      <div className="moviesection--listarea">
        <div className="moviesection--list" style={{
          marginLeft: scrollX,
          width: list.results.length * 150
        }}>         
            { list.results.length > 0 && list.results.map((item, index) => (
              <div className="moviesection--item" key={ index }>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            )) }
        </div>
      </div>
    </div>
  );
}

export default Moviesection;
