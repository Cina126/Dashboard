const express = require("express")
const database = require("./../database.js")

const stocksRoutes = express.Router()

stocksRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM stocks where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = stocksRoutes