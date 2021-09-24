import NavLink from '../shared/NavLink';
import './styles.css';

const DesktopNav = () => {
  return <div className="dn-container">
    <NavLink to="https://li.sten.to/Molars" text="Listen" />
    <NavLink to="https://molars.bandcamp.com/" text="Merch" />
    <NavLink to="http://eepurl.com/gE7-6f" text="Mailing List" />
    <NavLink to="https://www.youtube.com/molarsuk" text="Videos" />
  </div>
};

export default DesktopNav;