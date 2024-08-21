import conn from "../config/conn.js";
import { v4 as uuid4 } from "uuid";
import { request, response } from "express";

export const getLivros = (request, response) => {
  const sql = /*sql*/ `select * from livros`
  conn.query(sql, (err, data)=>{
    if(err){
         console.error(err)
         response.status(500).json({err: "Erro ao buscar livros"})
         return
    }
    const livros = data
    response.status(200).json(livros)

   })
};

export const criarLivros = (request, response) => {
};

export const buscarLivros = (request, response) => {

};

export const editarLivros = (request, response) => {

};

export const deletarLivros = (request, response) => {

};