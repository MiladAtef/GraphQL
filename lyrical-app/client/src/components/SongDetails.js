import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import fetchSongQuery from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetails extends Component {
	render() {
		const { song } = this.props.data;
		if (!song) return <div>Loading...</div>;

		return (
			<div>
				<Link to="/">Back</Link>
				<h3>{song.title}</h3>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate songId={this.props.match.params.id} />
			</div>
		);
	}
}

// the first argument is the query name
// the second one is an options object to associate some variables with the query
export default graphql(fetchSongQuery, {
	options: props => ({
		variables: { id: props.match.params.id }
	})
})(SongDetails);
