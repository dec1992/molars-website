import './styles.css';

const PillButton = ({ to, text }) => {
  return <a className="pill-button" href={to} target="_blank" rel="noreferrer">
      <p className="pill-text">{text}</p>
  </a>
};

export default PillButton;