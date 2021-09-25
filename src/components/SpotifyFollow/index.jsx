import './styles.css';

const SpotifyFollow = () => {
  const html = `<iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:0xbUnfgQVKr7lp9Pna3M2K&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowtransparency="true"></iframe>`;
  return <div className="spotify-follow">
    <div className="spotify-button" dangerouslySetInnerHTML={{ __html: html }} />
  </div>
}

export default SpotifyFollow;