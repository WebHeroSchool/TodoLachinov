import React from 'react';
import styles from './Footer.module.css';


const Footer = ({ count }) => (<div className={styles.footer}> The number of actions left: { count }</div>);

Footer.defaultProps = {
    count: 0
};

export default Footer;