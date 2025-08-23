const express = require("express")
const database = require("./../database.js")

const barChartRoutes = express.Router()

barChartRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM barchart where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = barChartRoutes