import "dotenv/config"
import express, { request, response } from "express"
import mysql from "mysql2"
import {v4 as uuid4} from "uuid"

const PORT = process.env.PORT;

const app = express()


app.use(express.json())

//CRIAR conexão com o banco de dados
const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD, //Sen@iDev77!.
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

//CONECTAR ao BANCO
conn.connect((err)=>{
    if(err){
        console.error(err)
    }
    app.listen(PORT, ()=>{
        console.log("Servidor on PORT "+PORT)
   })
    console.log("MSQL Conectado!")
})

