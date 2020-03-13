const mysql = require('mysql2/promise');
require('dotenv').config();

let state = {
    pool: null
};

exports.connect = async function () {

    state.pool = await mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATA_BASE,
    });
    await state.pool.getConnection();  //Check connection
    console.log('Successfully connected to the database');
};

exports.getPool = function() {
    return state.pool;
};

