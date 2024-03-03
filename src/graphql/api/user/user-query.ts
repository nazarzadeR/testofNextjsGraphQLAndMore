import { PrismaClient } from '@prisma/client'

type Context = {
    prisma: PrismaClient
}

export const UserQuery = {
    me: () => ({
        age: 20,
        id: 'namenam',
        name: 'dlkfnlkf',
    }),
    async users(_: any, __: any, { prisma }: Context) {
        return await prisma.user.findMany()
    },
    async user(_: any, { userId }: any, { prisma }: Context) {
        const data = await prisma.user.findUnique({
            where: {
                email: userId,
            },
        })
        return data
    },
}
