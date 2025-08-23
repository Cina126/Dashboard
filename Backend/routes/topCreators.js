const express = require("express")
const database = require("./../database.js")

const topCreatorsRoutes = express.Router()

topCreatorsRoutes.get("/", (req, res) => {
    database.query(`SELECT * FROM topCreators`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = topCreatorsRoutes