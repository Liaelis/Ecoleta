

const express = require("express")
// configurar o express pra visualizar a pasta public
const server = express()

//pegar o banco
const db = require("./database/db")


//config pasta public
server.use(express.static("nlw/public"))

//habilitar o uso do req.body
server.use(express.urlencoded({extended:true}))

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

server.post("/savepoint", (req,res)=>{

 const query =`
   INSERT INTO places (
      image, 
      name,
       address,
       address2,
     state,
      city,
       items
    
    ) VALUES (?,?,?,?,?,?,?);  `
    const values = [
     req.body.image,
     req.body.name,
     req.body.address,
     req.body.address2,
     req.body.state,
     req.body.city,
     req.body.items

   ]
//function call back tempo de espera de insersão
    function afterInsertData(err){
       if(err){
             console.log(err)
             return res.send("Erro ao Realizar o Cadastro")
        }
        console.log("cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html",{saved:true})
        //quando usa this nao usa arrow function

    }
    //passa função por referencia 
    //se colocasse afterInsertData()seria executada imediatamente
    db.run(query, values, afterInsertData )   

})

server.get("/search", (req,res)=>{

    const search = req.query.search
    if(search==""){
        return res.render("search-results.html",{total:0})
    }
    db.all(`SELECT * FROM places WHERE city  LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html",{places: rows, total:total})
       
    })
    
})
//porta server
server.listen(3000)