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
		})

		.catch((error) => {
			this.setState({
				isLoading: false,
				error
			});
		})

		octokit.rest.users.getByUsername({
			username: 'EmilLachinov8'
		})
		.then(({ data }) => {
			this.setState({
				name: data.login,
        		bio: data.bio,
				avatar: data.avatar_url,
				userInfo: data,
				isLoading: false
			})
		})

		.catch((error) => {
			this.setState({
				isLoading: false,
				error
			})
		})
	}

	render() {
		const { isLoading, repoList, error, avatar, bio, name } = this.state;
		if (error) {
			return (<div> Error: {error.message} </div>)
		} else {
			return (
				<div className={styles.box}>
					<h1> { name }</h1>
					<img className={styles.avatar} src={avatar} alt="avatar"/>
					<p>{ bio }</p>
					<h2 className={styles.title}> {isLoading ? <Preload /> : about} </h2>
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