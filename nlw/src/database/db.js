//import sqlite
const sqlite3 = require("sqlite3").verbose()

//inicar objeto
const db = new sqlite3.Database("nlw/src/database.db")

//utilizar o objeto de banco
module.exports = db
db.serialize(()=>{
    //criar uma tabela
 //   db.run(`
 //       CREATE TABLE IF NOT EXISTS places(
  //          id  INTEGER PRIMARY KEY AUTOINCREMENT,
  //          image TEXT,
 //           name TEXT,
  //          address  TEXT,
   //         address2 TEXT,
  //          state TEXT,
  //          city TEXT,
  //          items TEXT
    //    );
   // `)


    //inserir dados da tabela
  //  const query =`
  //  INSERT INTO places (
  //      image, 
  //      name,
 //       address,
 //       address2,
  //      state,
  //      city,
 //       items
    
 //   ) VALUES (?,?,?,?,?,?,?);  `
 //   const values = [
    //    "https://images.unsplash.com/photo-1545852528-fa22f7fcd63e?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
     //   "Paperside",
    //    "Jardin itu",
    //    "numero3095",
     //   "Rio Grande do Norte",
    //    "Rio do Sul",
      //  "Residuos eletronicos, Lâmpadas"
  //  ]
//function call back tempo de espera de insersão
  //  function afterInsertData(err){
     //   if(err){
        //    return console.log(err)
    //    }
     //   console.log("cadastrado com sucesso")
      //  console.log(this)
        //quando usa this nao usa arrow function

  //  }
    //passa função por referencia 
    //se colocasse afterInsertData()seria executada imediatamente
   // db.run(query, values, afterInsertData )

    //consultar
   // db.all(` SELECT * FROM places`, function(err,rows){
    //   if(err){
    //        return console.log(err)
    //    }
   //     console.log("Aqui estão seus registros")
  ///      console.log(rows)
 // })

    //deletar
    //db.run(`DELETE FROM places WHERE id =?`,[1],function(err){
      //  if(err){
        //    return console.log(err)
       // }
       // console.log("registro deletado com sucesso")
    //})
})

