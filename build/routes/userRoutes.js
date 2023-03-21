"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar el metodo routes que devuelve un objeto
const express_1 = require("express");
const userController_1 = require("../controller/userController");
//Inicializar la clase 
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.user);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
