import React from 'react';
import styles from './About.module.css';
import { Octokit } from '@octokit/rest';
import Preload from '../Preloader/Preloader'

const octokit = new Octokit();
const about = 'My repositories';

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: ''
	}

	componentDidMount() {
		octokit.rest.repos.listForUser({
			username: 'EmilLachinov8'
		})
		.then(({ data }) => {
			this.setState({
				repoList: data,
				isLoading: false
			});
		},
		(error) => {
			this.setState({
				isLoading: false,
				error
			});
		},
		octokit.rest.users.getByUsername({
			username: 'EmilLachinov8'
		})
		.then(({ data }) => {
			this.setState({
				userInfo: data,
				isLoading: false
			});
		}))
	}

	render() {
		const { isLoading, repoList, error } = this.state;
		if (error) {
			return (<div> Error: {error.message} </div>)
		} else {
			return (
				<div className={styles.box}>
					<h1 className={styles.title}> {isLoading ? <Preload /> : about} </h1>
					{!isLoading && <ol>
						{repoList.map(repo => (<li key={repo.id}>
							<a href={repo.html_url}>{repo.name}</a>
						</li>))}
					</ol>}
				</div>
			)
		}
	}	
}

export default About;