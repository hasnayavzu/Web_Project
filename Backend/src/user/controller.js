const pool = require('../../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUsersById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const { name, email, age, dob } = req.body;
    // check if email is exist
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("email already exists.");
        }
        // add user to db
        pool.query(queries.addUser, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send("User created successfully!");
        });
    });
};

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database, could not remove!");
        }

        pool.query(queries.removeUser, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User removed successfuly.");
        })
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getUsersById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database, could not update!");
        }

        pool.query(queries.updateUser, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated successfuly!");
        });
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    removeUser,
    updateUser,
};



