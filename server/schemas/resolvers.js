const { Book, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        books: async (parent, { _id}) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        }

    },
    Mutation: {

    }
};

module.exports = resolvers;