import React from 'react';

const Moviesection = ({ title, list }) => {
  return (
    <div className="moviesection">
      <h2>{title}</h2>
      <div className="moviesection--listarea">
        <div className="moviesection--list">         
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
