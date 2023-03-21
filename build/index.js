"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
//CLASE PARA ININCIAR EL SERVIDOR
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //Validar si existe un puerto en produccion sino que se levante en el 3000
        this.app.set('port', process.env.PORT || 3000);
        //uso de morgan para que lea las peticiones
        this.app.use((0, morgan_1.default)('dev'));
        //uso de cors para permitir acceder a la API por angular
        this.app.use((0, cors_1.default)());
        //Permitir el formato json que sustituye al bodyparser
        this.app.use(express_1.default.json());
        //Permitir el formato urlencoded que sustituye al bodyparser
    }
    routes() {
        //Importacion de rutas
        this.app.use('/api', indexRoutes_1.default);
        this.app.use('/user', userRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server started on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
