const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const models = require('./models');
const schema = require('./schema/schema');
const passportConfig = require('./services/auth');
const app = express();

mongoose.connect(
	'mongodb://localhost:27017/auth-graphql-app',
	{
		useNewUrlParser: true
	},
	err => {
		if (!err) {
			console.log('MongoDB Connection Succeeded.');
		} else {
			console.log('Error in DB connection: ' + err);
		}
	}
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: 'aaabbbccc',
		store: new MongoStore({ mongooseConnection: mongoose.connection })
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
	'/graphql',
	expressGraphQL({
		schema,
		graphiql: true
	})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
