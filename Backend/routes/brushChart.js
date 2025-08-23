const express = require("express")
const database = require("./../database.js")

const brushChartRoutes = express.Router()

brushChartRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM brushchart where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = brushChartRoutes