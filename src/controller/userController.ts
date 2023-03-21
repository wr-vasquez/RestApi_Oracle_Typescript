import {Request, Response} from 'express';

//import pool from '../database';
//import checkConnection from '../../src/database';


class UserController {
  public  user(req:Request, res:Response){
    //checkConnection.query('DESCRIBE PRUEBA');
        res.json({text:'Api corriendo'});
    }

}

export const userController =  new UserController();