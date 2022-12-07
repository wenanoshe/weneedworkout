import "./styles/Footer.scss";

import instagram_svg from "../assets/icons/instagram.svg";
import github_svg from "../assets/icons/github.svg";
import twitter_svg from "../assets/icons/twitter.svg";
import Logo from "/logo(48-27).svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="Logo we-need-wokout" />
        <h3>We need workout</h3>
      </div>
      <div className="footer__icons">
        <a href="https://github.com/wenanoshe" target="_blank" rel="noreferrer">
          <img src={github_svg} alt="github boxicons.com" />
        </a>

        <a
          href="https://www.instagram.com/braiderandrey/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram_svg} alt="instagram boxicons.com" />
        </a>

        <a
          href="https://twitter.com/PerezBraider"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter_svg} alt="twitter boxicons.com" />
        </a>
      </div>
    </footer>
  );
};
