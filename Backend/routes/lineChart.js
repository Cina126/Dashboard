const express = require("express")
const database = require("./../database.js")

const lineChartRoutes = express.Router()

lineChartRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM linechart where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = lineChartRoutes