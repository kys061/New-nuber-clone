import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema"

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
      schema
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    // this.app.express.use((req, res, next): void => {
    //   res.header('Access-Control-Allow-Origin', 'http://localhost:4000/playground');
    //   res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    //   );
    //   next();
    // })
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet({ 
        contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false 
      })
    );
  };
}

export default new App().app;