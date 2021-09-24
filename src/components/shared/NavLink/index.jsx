import './styles.css';

const NavLink = ({ to, text }) => {
  return <a className="nav-link" href={to} target="_blank" rel="noreferrer">{text}</a>
};

export default NavLink;