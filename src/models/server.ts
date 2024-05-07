import express, {Application} from 'express';
import cors from "cors";
import routesProduct from "../routes/product";
import routesUser from "../routes/user";
import { Product } from './product';
import { User } from './user';

class Server{ 
    private app: Application;
    private port: String;
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConecction();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Aplicación corriendo en el puerto: " + this.port);
        })
    }

    routes(){
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    midlewares(){
        //Parseo body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConecction(){
        try {
            await Product.sync();
            await User.sync();
            console.log("La conexión ha sido exitosa");
        } catch (error) {
            console.log("no se ha podido conectar a la BD" + error);
        }
    }
}

export default Server;