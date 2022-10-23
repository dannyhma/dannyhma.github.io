"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var constants_1 = require("./config/constants");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send('Selamat Datang di RESTful API gateway');
});
app.use('/mhs', routes_1.mhsRouter);
app.listen(constants_1.PORT, function () {
    console.log("Endpoint sudah siap diakses pada port ".concat(constants_1.PORT));
});
