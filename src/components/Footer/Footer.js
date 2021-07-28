import React from 'react';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ casesCount }) => (<div className={styles.footer}> The number of actions left: { casesCount }</div>);


Footer.propTypes = {
    casesCount: PropTypes.number.isRequired
};

export default Footer;