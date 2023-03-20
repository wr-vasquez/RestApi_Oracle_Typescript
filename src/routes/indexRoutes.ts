//Importar el metodo routes que devuelve un objeto
import { Router } from 'express';

//Inicializar la clase 
class IndexRoutes {

   public router: Router = Router();

   constructor() {
    
     this.config();
   }

   config(): void{
    this.router.get('/', (req, res) => res.send('Hello World'));

   }


}

const indexRoutes =  new IndexRoutes();
export default indexRoutes.router;