const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const UserType = require('./user_type');

// the resolve function in the user field
// will return the current user if the user is logged in
// and if the user is not logged in it will return null (req.user === undefined)
const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			resolve(parentValue, args, req) {
				return req.user;
			}
		}
	}
});

module.exports = RootQueryType;
