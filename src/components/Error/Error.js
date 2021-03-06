import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ message }) => (
  <div className="error">
    <p className="error__text">
      {message}
    </p>
    <a className="error__link" href="/">
      Go to Home page
    </a>
  </div>
);

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: 'Sorry, something went wrong',
};
