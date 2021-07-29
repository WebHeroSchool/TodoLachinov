import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ casesCount }) => (<div className={styles.footer}> The number of actions left: { casesCount }</div>);

export default Footer;