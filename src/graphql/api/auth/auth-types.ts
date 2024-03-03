export const AuthTypes = `#graphql
    
    type AuthReturnType {
        token: String
        errors: [String]
    }
    
    extend type Query {
        getToken: AuthReturnType
    }
`
