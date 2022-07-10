import hero from '../../assets/images/section1.jpeg';
import artwork from '../../assets/images/fgw-artwork.jpg';
import './styles.css';

const LatestRelease = () => {
  return (
    <div className="lr-container" style={{
      backgroundImage: `url(${hero})`
    }}>
      <div className="lr-overlay">
        <a className="lr-card" href='https://li.sten.to/finegreatwhatever' target="_blank" rel="noreferrer">
          <img className="lr-artwork" src={artwork} alt='album artwork'/>
          <p className="lr-caption">Fine, Great, Whatever Out Now - Listen Here!</p>
        </a>
      </div>
    </div>
  );
};

export default LatestRelease;
