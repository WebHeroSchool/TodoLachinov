import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';


const Footer = ({ count }) => (<div className={styles.footer}> The number of actions left: { count }</div>);

Footer.defaultProps = {
    count: 0
};


Footer.propTypes = {
    casesCount: PropTypes.number.isRequired
};


export default Footer;