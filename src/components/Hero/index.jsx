import MobileNav from '../MobileNav';
import DesktopNav from '../DesktopNav';
import logo from '../../assets/images/logo.png';
import hero from '../../assets/images/hero2.jpeg';
import './styles.css';

const Hero = () => {
  return (
    <div className="container" style={{
      backgroundImage: `url(${hero})`
    }}>
        <div className="hero-overlay">
        <DesktopNav />
        <img className="logo" src={logo} alt='molars logo' />
        </div>
        <MobileNav />
    </div>
  );
};

export default Hero;