import { GraphQLServer } from 'graphql-yoga' 

// Scalar values types

//Type definitions (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`

// Resolvers
const resolvers = {
    Query: {
        title() {
            return 'Cheetos'
        },
        price() {
            return 22.5
        },
        releaseYear() {
            return 1960
        },
        rating() {
            return 92.5
        },
        inStock() {
            return false
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})