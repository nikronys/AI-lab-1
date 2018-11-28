import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const routes = [{
  key: 'game',
  label: 'Приложение',
}, {
  key: 'knowledge',
  label: 'База знаний',
}];

const Footer = ({ activeRoute, onRouteChange }) => (
  <div className="hero-foot">
    <nav className="tabs">
      <div className="container">
        <ul>
          {routes.map(({ key, label }) => (
            <li key={key} className={classNames({ 'is-active': key === activeRoute })}>
              <a
                href={`#${key}`}
                onClick={onRouteChange.bind(null, key)}
              >{label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
);

Footer.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  onRouteChange: PropTypes.func.isRequired,
};

export default Footer;
