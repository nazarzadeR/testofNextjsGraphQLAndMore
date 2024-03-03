'use server'
import { jwtVerify, SignJWT } from 'jose'

export async function signJWTWithRefreshToken(payload: any) {
    return await Promise.all([createToken(payload), createToken(payload, true)])
}

export async function verifyJwtToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getJWTSecretKey())
        return payload
    } catch (error) {
        return null
    }
}

const createToken = async (payload: any, isRefreshToken: boolean = false) =>
    await new SignJWT(payload)
        .setIssuedAt()
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(isRefreshToken ? '5m' : '30s')
        .sign(getJWTSecretKey())

function getJWTSecretKey() {
    const secret = process.env.JWT_SECRET

    if (!secret) {
        throw new Error('JWT Secret key is not provided')
    }

    return new TextEncoder().encode(secret)
}
