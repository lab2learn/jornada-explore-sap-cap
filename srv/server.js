"use strict";

const cds = require("@sap/cds");
const cors = require('cors');
const proxy = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", app => {
    app.use(proxy());

    app.use(cors({
        origin: '*', // Allow all origins for development; restrict in production
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }));
});

module.exports = cds.server;