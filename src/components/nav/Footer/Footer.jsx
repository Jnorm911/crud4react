import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="Footer">
      <div className="footerIcons">
        <a href="https://www.linkedin.com/in/joshnorman911/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jnorm911">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
