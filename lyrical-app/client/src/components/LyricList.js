import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
	handleLyricLike = (lyricId, likes) => {
		this.props.mutate({
			variables: { id: lyricId },
			optimisticResponse: {
				__typename: 'Mutation',
				likeLyric: {
					__typename: 'LyricType',
					id: lyricId,
					likes: likes + 1
				}
			}
		});
	};

	renderLyrics = () => {
		return this.props.lyrics.map(({ id, content, likes }) => (
			<li className="collection-item" key={id}>
				{content}
				<div className="vote-box">
					<i
						className="material-icons"
						onClick={() => this.handleLyricLike(id, likes)}
					>
						thumb_up
					</i>
					{likes}
				</div>
			</li>
		));
	};
	render() {
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}

const mutation = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			likes
		}
	}
`;

export default graphql(mutation)(LyricList);
