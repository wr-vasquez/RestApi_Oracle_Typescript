"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar el metodo routes que devuelve un objeto
const express_1 = require("express");
const indexController_1 = require("../controller/indexController");
//Inicializar la clase 
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
