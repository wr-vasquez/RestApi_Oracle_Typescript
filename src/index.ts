import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
//import userRoutes from './routes/userRoutes'; 


//CLASE PARA ININCIAR EL SERVIDOR

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
    //Validar si existe un puerto en produccion sino que se levante en el 3000
        this.app.set('port', process.env.PORT || 3000);
        //uso de morgan para que lea las peticiones
        this.app.use(morgan('dev'));
        //uso de cors para permitir acceder a la API por angular
        this.app.use(cors());
        
    }

    routes(): void{
        this.app.use('/api', indexRoutes);

    }

    start(): void{
       
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server started on port', this.app.get('port'));
        });
    }
}

const server = new Server(); 
server.start();