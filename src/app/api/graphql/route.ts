import { NextRequest } from 'next/server'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import prisma from '@/lib/prisma'
import schema from '@/graphql/api/schema'

const server = new ApolloServer(schema)

const handler = startServerAndCreateNextHandler(server, {
    context: async (req) => ({ req, prisma }),
})

export { handler as GET, handler as POST }
