const fs = require("fs");

class Todos{
    constructor(){
        this.todos = JSON.parse(fs.readFileSync("./app/data/todoList.json", "utf-8"));
    }

    getAllTodos(){
        return this.todos;
    }

    getTodoById(id){
        const todo = this.todos.find((todo)=> todo.id == id);
        if(todo != undefined){
            return todo;
        } else{
            return {message: "Todo not present"};
        }
       
    }

}

module.exports = Todos;