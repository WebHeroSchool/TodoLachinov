import React from 'react';
import PropTypes  from 'prop-types';
import styles from'./About.module.css';


const About = ({ about }) => (
	<div className={styles.box}>
		<h1 className={styles.title}> {about} </h1>
	</div>
)

About.defaultProps = {
	about: "Emil Lachinov"
}

About.propTypes = {
	about: PropTypes.string
}

export default About;