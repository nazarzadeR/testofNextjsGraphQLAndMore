import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'

import { signJWTWithRefreshToken } from '@/services/jwt'
import { MutationCreateUserArgs } from '@/graphql/client/generated/client'

type Context = {
    prisma: PrismaClient
}

export const UserMutation = {
    createUser: async (
        _: any,
        { credential }: MutationCreateUserArgs,
        context: Context,
    ) => {
        const user = await context.prisma.user.create({
            data: credential,
        })

        const [token, refresh] = await signJWTWithRefreshToken({
            user: {
                id: user.id,
                email: user.email,
            },
        })

        cookies().set('refresh_token_from_site_name', refresh, {
            path: '/',
            httpOnly: true,
            maxAge: 60 * 1000,
            secure: process.env.NODE_ENV === 'production',
        })

        return {
            user,
            token,
        }
    },
}
