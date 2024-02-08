const typeDefs = `
  type Query {
    user: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    login
    addUser
    saveBook
    removeBook
  }

  type User {
    _id
    username
    email
    bookCount
    saveBooks

  type Book {
    bookId
    authors
    description
    title
    image
    link
  }

  type Auth {
    token
    user
  }
  }
`;

module.exports = typeDefs;