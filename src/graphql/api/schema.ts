import { gql } from 'graphql-tag'

import { AuthTypes, AuthQuery } from './auth'
import { UserTypes, UserQuery, UserMutation } from './user'

const schema = {
    typeDefs: gql`
        type Query {
            ping: String
        }

        type Mutation {
            pong: String
        }

        ${UserTypes}
        ${AuthTypes}
    `,
    resolvers: {
        Query: {
            ping: () => (Math.random() + 1).toString(36).substring(7),
            ...UserQuery,
            ...AuthQuery,
        },
        Mutation: {
            pong: () => (Math.random() + 1).toString(36).substring(7),
            ...UserMutation,
        },
    },
}

export default schema
