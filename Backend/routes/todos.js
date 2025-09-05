const express = require("express")
const database = require("./../database.js")

const todosRoutes = express.Router()

todosRoutes.get("/", (req, res) => {
    database.query(`SELECT * FROM todos`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

todosRoutes.put("/completeTodos/:userID", (req, res) => {
    database.query(`UPDATE todos SET isCompleted='${req.body.isCompleted}' WHERE id = "${req.params.userID}" `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
todosRoutes.delete("/deleteTodos/:userID", (req, res) => {
    database.query(`DELETE FROM todos WHERE id = "${req.params.userID}" `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

todosRoutes.post("/createNewTodo", (req, res) => {
    database.query(`INSERT INTO todos VALUES (null ,'${req.body.title}','${req.body.isCompleted}','${req.body.userID}') `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

todosRoutes.put("/editTodoTitle/:todoID", (req, res) => {
    database.query(`UPDATE todos SET title='${req.body.title}' WHERE id = "${req.params.todoID}" `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
todosRoutes.delete("/deleteAllDoneTodos", (req, res) => {
    database.query(`DELETE FROM todos WHERE isCompleted = 1 `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})
todosRoutes.delete("/deleteAllTodos", (req, res) => {
    database.query(`DELETE FROM todos WHERE isCompleted = 0 `, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = todosRoutes