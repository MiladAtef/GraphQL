const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
require('./models');
const schema = require('./schema/schema');
const app = express();

mongoose.connect(
	'mongodb://localhost:27017/Lyrical-app',
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
app.use(cors());
app.use(
	'/graphql',
	expressGraphQL({
		schema,
		graphiql: true
	})
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
