const typeDefs = `
  type Query {
    user: [User]
    books(_id: String): [Book]
  }

  type Mutation {
    login: Auth
    addUser: Auth
    saveBook
    removeBook
  }

  type User {
    _id
    username
    email
    bookCount
    saveBooks: [Book]

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
    user: User
  }
  }
`;

module.exports = typeDefs;