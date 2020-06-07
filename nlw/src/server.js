

const express = require("express")
// configurar o express pra visualizar a pasta public
const server = express()
//config pasta public
server.use(express.static("nlw/public"))


//utilizando template engine
const nunjucks = require("nunjucks")

nunjucks.configure("nlw/src/views", {
    express:server,
    noCache: true
})





//configurar caminhos
server.get("/", (req,res)=>{
    return res.render("index.html")
})
server.get("/create-point", (req,res)=>{
    return res.render("create-point.html")
})
server.get("/search", (req,res)=>{
    return res.render("search-results.html")
})
//porta server
server.listen(3000)