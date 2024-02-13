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
        getSingleUser: async (parent, args) => {
            const user = await User.findOne(args);
            return user;
        },
        createUSer: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { bookId } ) => {
            const book = await Book.findOne(
                { _id: bookId }
            );
            return book;
        },
        deleteBook: async (parent, { bookId } ) => {
            const book = await Book.findOneAndDelete(
                { _id: bookId}
            );
            return book;
        },
},
};

module.exports = resolvers;