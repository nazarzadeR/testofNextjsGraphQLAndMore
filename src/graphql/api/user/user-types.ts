export const UserTypes = `#graphql
    type User {
        id: ID!
        name: String
        password: String
        email: String!
        refresh_token: [String]!
    }


    type CreateUserReturnType {
        token: String!
        user: User!
    }

    input createUser {
        email: String!
        password: String!
    }

    extend type Query {
        me: User
        users: [User]!
        user(userId: ID!): User
    }

    extend type Mutation {
        createUser(credential: createUser!): CreateUserReturnType!
    }
`
