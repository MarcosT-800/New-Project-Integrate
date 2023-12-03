const express = require("express"); 
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pi"
})
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO professor (`email`, `senha`,`las`) VALUES (?)";
    const values = [
        req.body.email,
        req.body.senha,
        req.body.las 
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM professor where `email` = ? AND `senha` = ?";
    db.query(sql, [req.body.email,req.body.senha], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }else{
            return res.json("failed");
        }
    })
})

app.get("/artigo", (req, res) =>{
    const sql = "SELECT * FROM artigo"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/adartigo", (req,res)=>{
    const sql = "INSERT INTO artigo (`autor`,`orientador`,`resumo` VALUES (?)"
    const values = [
        req.body.autor,
        req.body.orientador,
        req.body.resumo 
    ]

    db.query(sql,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)    
    })
})

app.listen(8081, ()=> {
    console.log("listening");
}) 