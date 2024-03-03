import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth).*)'],
}

export function middleware(request: NextRequest) {
    const token = cookies().get('refresh_token_from_site_name')

    if (!!!token)
        return NextResponse.redirect(new URL('/auth/login', request.url))

    return NextResponse.next()
}
