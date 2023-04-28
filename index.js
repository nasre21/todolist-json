const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("dataBase.json")

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


server.use(middlewares)

server.use(port)

server.listen(port)