const express = require("express")
const database = require("../database.js")

const historiesRoutes = express.Router()

historiesRoutes.get("/", (req, res) => {
    database.query(`SELECT * FROM histories`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = historiesRoutes