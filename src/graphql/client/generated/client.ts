export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never
      }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
}

export type AuthReturnType = {
    __typename?: 'AuthReturnType'
    errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    token?: Maybe<Scalars['String']['output']>
}

export type CreateUserReturnType = {
    __typename?: 'CreateUserReturnType'
    token: Scalars['String']['output']
    user: User
}

export type Mutation = {
    __typename?: 'Mutation'
    createUser: CreateUserReturnType
    pong?: Maybe<Scalars['String']['output']>
}

export type MutationCreateUserArgs = {
    credential: CreateUser
}

export type Query = {
    __typename?: 'Query'
    getToken?: Maybe<AuthReturnType>
    me?: Maybe<User>
    ping?: Maybe<Scalars['String']['output']>
    user?: Maybe<User>
    users: Array<Maybe<User>>
}

export type QueryUserArgs = {
    userId: Scalars['ID']['input']
}

export type User = {
    __typename?: 'User'
    email: Scalars['String']['output']
    id: Scalars['ID']['output']
    name?: Maybe<Scalars['String']['output']>
    password?: Maybe<Scalars['String']['output']>
    refresh_token: Array<Maybe<Scalars['String']['output']>>
}

export type CreateUser = {
    email: Scalars['String']['input']
    password: Scalars['String']['input']
}

export type UserMetaFragment = {
    __typename?: 'User'
    name?: string | null
    email: string
}

export type MutationMutationVariables = Exact<{
    credential: CreateUser
}>

export type MutationMutation = {
    __typename?: 'Mutation'
    createUser: {
        __typename?: 'CreateUserReturnType'
        token: string
        user: {
            __typename?: 'User'
            id: string
            name?: string | null
            email: string
        }
    }
}

export type PingPongMutationVariables = Exact<{ [key: string]: never }>

export type PingPongMutation = { __typename?: 'Mutation'; pong?: string | null }

export type PongPingQueryVariables = Exact<{ [key: string]: never }>

export type PongPingQuery = { __typename?: 'Query'; ping?: string | null }

export type UserMetaQueryVariables = Exact<{ [key: string]: never }>

export type UserMetaQuery = {
    __typename?: 'Query'
    me?: {
        __typename?: 'User'
        id: string
        name?: string | null
        email: string
    } | null
}
