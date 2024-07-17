const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
require('dotenv').config();
const { readdirSync } = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
const routesPath = path.join(__dirname, 'routes');
readdirSync(routesPath).map((file) => {
    const routeFilePath = path.join(routesPath, file);
    app.use('/api/v1', require(routeFilePath));
});

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('Escuchando el puerto:', PORT);
    });
};

server();
