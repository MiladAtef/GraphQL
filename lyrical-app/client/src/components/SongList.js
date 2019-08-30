import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSongsQuery from '../queries/fetchSongs';

export class SongList extends Component {
	handleSongDelete = songId => {
		this.props
			.mutate({
				variables: { id: songId }
			})
			.then(() => this.props.data.refetch()); // this method 'refetch' will refectch all the component associated queries (just the associated with the component), we can also use the other way to refetch queries by 'refetchQueries' property in the mutate options object
	};

	renderSongs = () => {
		if (this.props.data.loading) {
			return <div>Loading....</div>;
		}
		return this.props.data.songs.map(({ id, title }) => (
			<li key={id} className="collection-item">
				<Link to={`/songs/${id}`}> {title}</Link>
				<i
					className="material-icons  red-text"
					onClick={() => this.handleSongDelete(id)}
				>
					delete
				</i>
			</li>
		));
	};

	render() {
		return (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link
					to="/songs/new"
					className=" fixed-to-bottom btn-floating btn-larg red right"
				>
					<i className="material-icons ">add</i>
				</Link>
			</div>
		);
	}
}

const mutation = gql`
	mutation DeleteSong($id: ID) {
		deleteSong(id: $id) {
			id
		}
	}
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));
