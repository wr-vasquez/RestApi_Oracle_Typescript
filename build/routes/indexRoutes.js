"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar el metodo routes que devuelve un objeto
const express_1 = require("express");
//Inicializar la clase 
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hello World'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
