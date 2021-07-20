import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ counter }) => (<div className={styles.footer}> The number of actions left: { counter }</div>);

export default Footer;