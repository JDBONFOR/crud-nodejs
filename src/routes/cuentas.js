const express = require('express');
const router = express.Router();

const connection = require('../db-connector');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM cuentas', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    connection.query('SELECT * FROM cuentas WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
})

router.post('/', (req, res) => {
    const {id, nombre, apellido, edad, dni} = req.body;
    const query = ' CALL cuentasIns (?, ?, ?, ?, ?)'
    connection.query(query, [id, nombre, apellido, edad, dni], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Account was created'})
        } else {
            console.log(err);
        }
    })
})


router.put('/:id', (req, res) => {
    const {nombre, apellido, edad, dni} = req.body;
    const {id} = req.params;
    const query = ' CALL cuentasIns (?, ?, ?, ?, ?)'
    connection.query(query, [id, nombre, apellido, edad, dni], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Account was updated'})
        } else {
            console.log(err);
        }
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    connection.query('DELETE FROM cuentas WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Account was deleted'})
        } else {
            console.log(err)
        }
    })
})

module.exports = router;