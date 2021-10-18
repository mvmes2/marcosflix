import React from 'react';
import { Howl } from 'howler';
import startSound from '../sounds/netflix-start.mp3'

const sfx = {
  main: new Howl({
    src: [startSound],
    volume: 0.08,
  })
}

function playMain() {
  if (!sfx.main.playing()) {
    sfx.main.play();
  }
}

const Home = () => {
  return (
    <div>
      
    </div>
  );
}

export default Home;
