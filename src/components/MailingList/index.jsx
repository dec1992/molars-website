import hero from '../../assets/images/section3.jpeg';
import './styles.css';

const MailingList = () => {
  return (
    <div className="ml-container" style={{
      backgroundImage: `url(${hero})`
    }}>
      <div className="ml-overlay">
        <p className="ml-offer">Claim your free CD or Download!</p>
        <a className="ml-button" href="http://eepurl.com/gE7-6f" target="_blank" rel="noreferrer">Sign Up!</a>
        <p className="ml-description">Sign up to our mailing list to hear about new music and shows near you.</p>
      </div>
    </div>
  );
};

export default MailingList;