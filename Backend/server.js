require("dotenv").config()

const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");

const stocksRoutes = require("./routes/stocks")
const leftMenusLinksRoutes = require("./routes/leftMenusLinks")
const topCreatorsRoutes = require("./routes/topCreators")
const lineChartRoutes = require("./routes/lineChart")
const lineChartTitleRoutes = require("./routes/lineChartTitle")
const barChartRoutes = require("./routes/barChart")
const pieChartRoutes = require("./routes/piechart")
const pieChartTitlesRoutes = require("./routes/pieChartTitle")
const brushChartRoutes = require("./routes/brushChart")
const usersRoutes = require("./routes/users")
const historiesRoutes = require("./routes/histories")
const projectsRoutes = require("./routes/projects")

const server = express()

server.use(bodyParser.json())
server.use(cors())

server.use("/dashboardAPI/stocks", stocksRoutes)
server.use("/dashboardAPI/leftMenusLinks", leftMenusLinksRoutes)
server.use("/dashboardAPI/topCreators", topCreatorsRoutes)
server.use("/dashboardAPI/lineChart", lineChartRoutes)
server.use("/dashboardAPI/lineChartTitle", lineChartTitleRoutes)
server.use("/dashboardAPI/barChart", barChartRoutes)
server.use("/dashboardAPI/pieChart", pieChartRoutes)
server.use("/dashboardAPI/pieChartTitles", pieChartTitlesRoutes)
server.use("/dashboardAPI/brushChart", brushChartRoutes)
server.use("/dashboardAPI/users", usersRoutes)
server.use("/dashboardAPI/histories", historiesRoutes)
server.use("/dashboardAPI/projects", projectsRoutes)

const PORT = process.env.PORT || 5000

// server.listen(4000, (err) => {
//     err ? console.log(err) : console.log("server run on port process.env.PORT")
// })

server.listen(PORT, "0.0.0.0", (err) => {
    err ? console.log(err) : console.log("server run on port process.env.PORT")
})

// http://localhost:4000

// https://dashboard-44w3.onrender.com