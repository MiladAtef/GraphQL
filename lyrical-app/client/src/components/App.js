import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetails from './SongDetails';

const App = () => (
	<div className="container">
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={SongList} />
				<Route path="/songs/new" component={SongCreate} />
				<Route path="/songs/:id" component={SongDetails} />
			</Switch>
		</Router>
	</div>
);

export default App;
