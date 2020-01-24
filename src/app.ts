import express from 'express'
import morgan from 'morgan'

//Routes
import IndexRoute  from './routes/index.routes'
import PostRoute  from './routes/post.routes'
import authRoutes from './routes/auth.routes'

export class App {
    private app: express.Application

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.port || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(express.json())
         /* this.app.use(express.urlencoded({ extended: false }))  */
    }

    routes() {
        this.app.use(IndexRoute);
        this.app.use('/post', PostRoute);
        this.app.use('/api/auth', authRoutes) ;
    }


    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port`, this.app.get('port'))
    }
}