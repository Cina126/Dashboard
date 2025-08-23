const express = require("express")
const database = require("./../database.js")

const usersRoutes = express.Router()

usersRoutes.get("/", (req, res) => {
    database.query(`SELECT * FROM users where token = '${req.headers.authorization}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

usersRoutes.post("/userLogin", (req, res) => {
    database.query(`SELECT * FROM users where email = '${req.body.email}' and password = '${req.body.password}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = usersRoutes