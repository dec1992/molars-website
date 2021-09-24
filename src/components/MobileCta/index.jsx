import './styles.css';

const MobileCta = ({text, url, cta}) => {
  return <div className="mobile-cta">
    <p className="mobile-cta-text">{text}</p><a href={url} className="mobile-cta-link"  target="_blank" rel="noreferrer">{cta}</a>
  </div>
};

export default MobileCta;