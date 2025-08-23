const express = require("express")
const database = require("./../database.js")

const pieChartTitlesRoutes = express.Router()

pieChartTitlesRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM piecharttitles where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = pieChartTitlesRoutes