import PillButton from '../shared/PillButton';
import './styles.css';

const MobileNav = () => {
  return <>
    <div className="nav-container">
      <PillButton to='/' text='Listen' />
      <PillButton to='/' text='Merch' />
    </div>
  </>
};

export default MobileNav;