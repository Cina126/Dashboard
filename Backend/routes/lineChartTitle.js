const express = require("express")
const database = require("./../database.js")

const lineChartTitleRoutes = express.Router()

lineChartTitleRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM linecharttitle where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = lineChartTitleRoutes