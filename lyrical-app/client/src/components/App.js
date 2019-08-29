import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import SongList from './SongList';
import SongCreate from './SongCreate';

const App = () => (
	<div className="container">
		<Router history={history}>
			<React.Fragment>
				<Route exact path="/" component={SongList} />
				<Route path="/songs/new" component={SongCreate} />
			</React.Fragment>
		</Router>
	</div>
);

export default App;
