const http = require("http");
const url = require("url");

const todoHandlers = require("./app/handlers/fetchTodoHandlers");

const server = http.createServer((req, res)=> {
    console.log("Request URL", req.url)
    const requestUrl = req.url;
    const parts = url.parse(requestUrl, true);
    console.log(parts);

    switch(parts.pathname){
        case "/todos": {
            const {id} = parts.query;

            if(id){
                return todoHandlers.fetchTodoByIdHandler(req, res, id);
            } else {
                return todoHandlers.fetchAllTodosHandler(req, res);
            }
        }
        default: {
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            console.log(`${new Date()} - Route not found`);
            res.end(JSON.stringify({ message: "Route not found" }));
          }
    }
    
})

server.listen(8080, ()=> {
    console.log("Server is running on port 8080")
});