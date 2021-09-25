import hero from '../../assets/images/section2.jpeg';
import Spotify from 'react-spotify-player';

import './styles.css';
import { useEffect, useState } from 'react';

const SpotifyPlayer = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const [ spotifySize, updateSpotifySize ] = useState({
    width: '90%',
    height: 200,
  })
  
  useEffect(() => {
    if (windowWidth > 400 ) {
      const size = {
        width: '60%',
        height: windowHeight * 0.6
      };
      updateSpotifySize(size);
    };
  }, [windowWidth, windowHeight]);
  
  return (
    <div className="sp-container" style={{
      backgroundImage: `url(${hero})`
    }}>
      <div className="sp-overlay">
        <Spotify 
          uri="spotify:artist:0xbUnfgQVKr7lp9Pna3M2K"
          size={spotifySize}
          view='list'
          theme='black'
        />
      </div>
    </div>
  );
};

export default SpotifyPlayer;