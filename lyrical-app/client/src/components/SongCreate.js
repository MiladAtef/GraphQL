import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import history from '../history';
import fetchSongsQuery from '../queries/fetchSongs';

export class SongCreate extends Component {
	state = { title: '' };

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props
			.mutate({
				variables: {
					title: this.state.title
				},
				refetchQueries: [{ query: fetchSongsQuery }]
			})
			.then(() => history.push('/'));
	};

	render() {
		return (
			<div>
				<Link to="/">Back</Link>
				<h3>Create New Song</h3>
				<form onSubmit={this.handleSubmit}>
					<label>Song Title:</label>
					<input
						type="text"
						name="title"
						onChange={this.handleChange}
						value={this.state.title}
						required
					/>
					<button className="btn">Create</button>
				</form>
			</div>
		);
	}
}

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			title
		}
	}
`;

export default graphql(mutation)(SongCreate);
