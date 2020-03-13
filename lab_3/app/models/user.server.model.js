const db = require('../../config/db');

exports.getAll = async function() {

    console.log('Request to get all users from the database...');

    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_users';
    const [rows] = await conn.query(query);
    conn.release();
    return rows;
};

exports.getOne = async function( id ) {
    console.log( `Request to get user ${id} from the database...` );
    const conn = await db.getPool().getConnection();
    const query = 'select * from lab2_users where user_id = ?';
    const [ rows ] = await conn.query( query, [ id ] );
    conn.release();
    return rows;
};

exports.insert = async function(username) {

    console.log(`Resquest to insert ${username} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'insert into lab2_users (username) values (?)';
    const [result] = await conn.query(query, [username]);
    conn.release();
    return result;
};

exports.alter = async function(username, id) {

    console.log(`Request to alter ${id} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'update lab2_users set username = ? where user_id = ?';
    const [result] = await conn.query(query, [username, id]);
    return result;
};

exports.remove = async function(id) {

    console.log(`Request to delete ${id} into the database...`);

    const conn = await db.getPool().getConnection();
    const query = 'delete from lab2_users where user_id = ?';
    const [result] = await conn.query(query, [id]);
    return result;
};

