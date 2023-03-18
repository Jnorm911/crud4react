import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
