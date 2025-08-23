const express = require("express")
const database = require("./../database.js")

const projectsRoutes = express.Router()

projectsRoutes.get("/:userID", (req, res) => {
    database.query(`SELECT * FROM projects where userID = '${req.params.userID}' `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = projectsRoutes