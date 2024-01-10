const Todos = require("../service/todoService");

const todos = new Todos();

const fetchAllTodosHandler = (req, res)=> {
    res.setHeader("Content-Type", "application/json");
    if(req.method === "GET"){
        res.statusCode = 200;
        console.log(`${new Date()} - API called for fetching all the todos`)
        res.end(JSON.stringify(todos.getAllTodos()))
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Route not found"}))
    }
}

const fetchTodoByIdHandler = (req, res, id)=> {
    res.setHeader("Content-Type", "application/json");
    if(req.method === "GET"){
        res.statusCode = 200;
        console.log(`${new Date()} - API called for fetching all the todos`)
        res.end(JSON.stringify(todos.getTodoById(id)))
    }else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Route not found"}))
    }
}

module.exports = {
    fetchAllTodosHandler,
    fetchTodoByIdHandler
};