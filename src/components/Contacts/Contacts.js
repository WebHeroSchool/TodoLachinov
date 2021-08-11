import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';


const Contacts = ({ contacts }) => (
	<div className={styles.box}>
		<h1 className={styles.title}> {contacts} </h1>
	</div>
)

Contacts.defaultProps = {
	contacts: "88005553535"
}

Contacts.propTypes = {
	contacts: PropTypes.string
}

export default Contacts;