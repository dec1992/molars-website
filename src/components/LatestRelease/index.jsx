import hero from '../../assets/images/section1.jpeg';
import artwork from '../../assets/images/artwork.jpeg';
import './styles.css';

const LatestRelease = () => {
  return (
    <div className="lr-container" style={{
      backgroundImage: `url(${hero})`
    }}>
      <div className="lr-overlay">
        <a className="lr-card" href='https://li.sten.to/koj96TK' target="_blank" rel="noreferrer">
          <img className="lr-artwork" src={artwork} alt='album artwork'/>
          <p className="lr-caption">Ducking Punches Out Now - Listen Here!</p>
        </a>
      </div>
    </div>
  );
};

export default LatestRelease;