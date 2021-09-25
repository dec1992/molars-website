import PillButton from '../shared/PillButton';
import './styles.css';

const MobileNav = () => {
  return <>
    <div className="nav-container">
      <PillButton to='https://li.sten.to/Molars' text='Listen' />
      <PillButton to='https://molars.bandcamp.com/' text='Merch' />
    </div>
  </>
};

export default MobileNav;