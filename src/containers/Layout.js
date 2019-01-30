import React from 'react';
import PropTypes from 'prop-types';

import './Layout.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  contentCenter: PropTypes.bool
};

const defaultProps = {
  contentCenter: false
};

const Layout = ({ children, contentCenter }) => {
  return (
    <section>
      <header>
        <h1>OAuth Authentication with Firebase</h1>
      </header>
      <main className={contentCenter ? 'content-center' : ''}>{children}</main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="heart emoji">
          😎
          </span>{' '}
          by Topher
        </p>
      </footer>
    </section>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;