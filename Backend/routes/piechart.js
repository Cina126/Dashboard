const express = require("express")
const database = require("./../database.js")

const pieChartRoutes = express.Router()

pieChartRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM piechart where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = pieChartRoutes