import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { mergeResolvers } from "@graphql-tools/merge";
import path from "path";


const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
  );
  
  const allResolvers = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
  );
  
  const mergedTypes = mergeTypes(allTypes);
  const mergedResolvers = mergeResolvers(allResolvers);
  
  const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
  });
  
  export default schema;
