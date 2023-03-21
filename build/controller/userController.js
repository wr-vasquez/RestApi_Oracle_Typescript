"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
//import pool from '../database';
//import checkConnection from '../../src/database';
class UserController {
    user(req, res) {
        //checkConnection.query('DESCRIBE PRUEBA');
        res.json({ text: 'Api corriendo' });
    }
}
exports.userController = new UserController();
