import { FaSpotify, FaBandcamp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './styles.css';

const Footer = () => {
  return <div className="footer">
    <div className="footer-nav">
      <a className="footer-badge" href="https://open.spotify.com/artist/0xbUnfgQVKr7lp9Pna3M2K" target="_blank" rel="noreferrer">
        <FaSpotify className="footer-icon" />
      </a>
      <a className="footer-badge" href="https://molars.bandcamp.com/" target="_blank" rel="noreferrer">
        <FaBandcamp className="footer-icon" />
      </a>
      <a className="footer-badge" href="https://instagram.com/molarsuk" target="_blank" rel="noreferrer">
        <FaInstagram className="footer-icon" />
      </a>
      <a className="footer-badge" href="https://twitter.com/molarsuk" target="_blank" rel="noreferrer">
        <FaTwitter className="footer-icon" />
      </a>
      <a className="footer-badge" id="nudge-left" href="https://facebook.com/molarsuk" target="_blank" rel="noreferrer">
        <FaFacebook className="footer-icon" />
      </a>
      <a className="footer-badge" id="nudge-left" href="mailto:info@molarsuk.com" target="_blank" rel="noreferrer">
        <MdEmail className="footer-icon" />
      </a>
    </div>
  </div>
};

export default Footer;