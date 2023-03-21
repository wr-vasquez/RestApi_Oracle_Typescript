//Importar el metodo routes que devuelve un objeto
import { Router } from 'express';

import {userController} from '../controller/userController';

//Inicializar la clase 
class UserRoutes {

   public router: Router = Router();

   constructor() {
    
     this.config();
   }

   config(): void{
    this.router.get('/', userController.user);

   }


}

const userRoutes =  new UserRoutes();
export default userRoutes.router;
