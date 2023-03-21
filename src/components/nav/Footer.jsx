import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const style = {
  backgroundColor: "rgba(255, 255, 255, 0)",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "80px",
  width: "100%",
};

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <footer style={style}>
        <a
          href="https://github.com/jnorm911"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '10px' }}
          className="footerIcons"
        >
          <FaGithub size={64} />
        </a>
        <a
          href="https://www.linkedin.com/in/joshnorman911/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcons first-icon"
        >
          <FaLinkedin size={64} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
