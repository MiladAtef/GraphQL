import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
	state = { content: '' };

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props
			.mutate({
				variables: {
					id: this.props.songId,
					content: this.state.content
				}
			})
			.then(() => this.setState({ content: '' }));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Add A Lyric</label>
				<input
					type="text"
					required
					name="content"
					onChange={this.handleChange}
					value={this.state.content}
				/>
			</form>
		);
	}
}

const mutation = gql`
	mutation AddLyric($content: String, $id: ID) {
		addLyricToSong(content: $content, songId: $id) {
			id
			title
			lyrics {
				id
				content
				likes
			}
		}
	}
`;

export default graphql(mutation)(LyricCreate);
