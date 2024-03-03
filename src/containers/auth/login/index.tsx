'use client'
import { FormEvent, useRef } from 'react'

import { http } from '@/lib/http'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CreateUserMutation from '@/graphql/client/mutations/create-user.graphql'

export default function LoginContainer() {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const credential = {
            email: email.current?.value,
            password: password.current?.value,
        }

        const response = await http({
            query: CreateUserMutation,
            variables: { credential },
        })

        console.log(response)
    }

    return (
        <main className="container flex h-full w-full items-center justify-center">
            <div className="flex h-1/2 w-1/2 items-center justify-center rounded shadow-primary-foreground ">
                <form
                    className="flex w-[70%] flex-col  gap-8"
                    onSubmit={handleSubmit}
                >
                    <h3 className="mx-auto text-2xl font-bold">Login</h3>
                    <div className="relative">
                        <Input
                            ref={email}
                            type="email"
                            name="email"
                            className="peer/email p-6"
                            autoComplete="off"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 transition-all duration-300 peer-valid/email:-left-1 peer-valid/email:-top-7 
                          peer-invalid/email:-left-1 peer-invalid/email:-top-7 peer-focus/email:-left-1 peer-focus/email:-top-7 "
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative">
                        <Input
                            ref={password}
                            type="password"
                            name="password"
                            autoComplete="off"
                            className="peer p-6"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-3 transition-all duration-300 peer-valid:-left-1 peer-valid:-top-7 peer-focus:-left-1 peer-focus:-top-7 "
                        >
                            Password
                        </label>
                    </div>

                    <Button type="submit" className="mx-auto w-2/3 font-bold">
                        Login
                    </Button>
                </form>
            </div>
        </main>
    )
}
