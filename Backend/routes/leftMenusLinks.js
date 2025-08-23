const express = require("express")
const database = require("./../database.js")

const leftMenusLinksRoutes = express.Router()

leftMenusLinksRoutes.get("/", (req, res) => {
    database.query(`SELECT * FROM leftmenuslinks`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
module.exports = leftMenusLinksRoutes