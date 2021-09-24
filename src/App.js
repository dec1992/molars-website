import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestRelease from './components/LatestRelease';
import MobileCta from './components/MobileCta';
import SpotifyPlayer from './components/SpotifyPlayer';
import MailingList from './components/MailingList';
import './reset.css';

function App() {
  return (
    <div className="App">
      <MobileCta text='claim free CD or download' url='http://eepurl.com/gE7-6f' cta='click here'/>
      <Hero />
      <LatestRelease />
      <SpotifyPlayer />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
