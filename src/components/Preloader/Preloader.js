import React from 'react';
import styles from './Preloader.module.css';

const Preload = () => (
    <div className ={styles.spinner}><div className = {styles.circle}>
    <div></div>
    </div></div>
)

export default Preload; 