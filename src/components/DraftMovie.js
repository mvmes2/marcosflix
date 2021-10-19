import React from 'react';

const Draftmovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);
  const genres = [];
  for(let index in item.genres) {
    genres.push(item.genres[index].name);
  }

  return (
    <section className="draft" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="draft--vertical-fade">
        <div className="draft--horizontal-fade">
          <div className="draft--name">{ item.original_name }</div>
            <div className="draft--info">
              <div className="draft--points">{ item.vote_average } pontos</div>
              <div className="draft--year">{firstDate.getFullYear()}</div>
              <div className="draft--seasons">{ item.number_of_seasons } temporada{item.number_of_seasons !== 1 ? 's' : '' }</div>
              <div className="draft--description">{ item.overview }</div>
              <div className="draft--buttons">
              </div>
                <a href="" className="draft--btn-assistir">► Assistir</a>
                <a href="" className="draft--btn-list">+ Minha Lista</a>
            </div>
              <div className="draft--genres"><strong>Gêneros:</strong> { genres.join(', ') }</div>
        </div>
      </div>
    </section>
  );
}

export default Draftmovie;
