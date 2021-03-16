import { sayHelloResponse, SayHelloQueryArgs } from "../../../types/graph";


const resolvers = {
    Query: {
        sayHello: (_, args:SayHelloQueryArgs): sayHelloResponse => {
            return {
                error: false,
                text: `Hello ${args.name}`
            }
        }
    }
    
}

export default resolvers;