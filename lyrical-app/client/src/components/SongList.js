import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import fetchSongsQuery from '../queries/fetchSongs';

export class SongList extends Component {
	renderSongs = () => {
		if (this.props.data.loading) {
			return <div>Loading....</div>;
		}
		return this.props.data.songs.map(({ id, title }) => (
			<li key={id} className="collection-item">
				{title}
			</li>
		));
	};

	render() {
		return (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link to="/songs/new" className="btn-floating btn-larg red right">
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

export default graphql(fetchSongsQuery)(SongList);
