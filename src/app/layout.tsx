import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/contexts/ThemeContext'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Just testing Next js, Graphql, Prisma, MongoDB, JWT',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html className="h-full w-full" lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, 'h-full w-full')}>
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                    themes={['light', 'dark', 'blue']}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
