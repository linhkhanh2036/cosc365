const user = require('../models/user.server.model');

exports.list = async function(req, res) {
    console.log('\nRequest to list users...')

    try {
        const result = await user.getAll();
        res.status(200)
            .send(result);
    } catch(err) {
        res.status(500)
            .send(`ERROR getting users ${err}`);
    }
};

exports.create = async function(req, res) {
    console.log('\nRequest to create a new user...');
    
    const username = req.body.username;

    try {
        const result = await user.insert(username);
        res.status(200)
            .send('User created');
    } catch(err) {
        res.status(500)
            .send(`ERROR creating user ${username}: ${err}`);
    }
};

exports.read = async function( req, res ) {
    console.log( '\nRequest to read a user...' );
    const id = req.params.id;
    try {
        const result = await user.getOne( id );
        if( result.length === 0 ){
            res.status( 400 )
            .send('Invalid Id');
        }
        else {
            res.status( 200 )
                .send( result );
        }
    } catch( err ) {
        res.status( 500 )
            .send( `ERROR reading user ${id}: ${ err }` );
    }
};

exports.update = async function(req, res) {

    console.log('\nRequest to update a user...');

    const id = req.params.id;
    const username = req.body.username;

    try {
        const result = await user.alter(username, id);
        res.status(200)
            .send('User successfully updated');
    } catch(err) {
        res.status(500)
            .send(`ERROR update user ${id}: ${err}`);
    }

};

exports.delete = async function(req, res) {

    console.log('\nRequest to delete a user...');
    const id = req.params.id;

    try {
        const result = await user.remove(id);
        res.status(200)
            .send('User successfully deleted');
    } catch(err) {
        res.status(500)
            .send(`ERROR delete user ${id}: ${err}`);
    }
};



