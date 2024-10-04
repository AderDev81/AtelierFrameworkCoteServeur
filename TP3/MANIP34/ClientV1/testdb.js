//npm i sqlite3
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFileLocation = path.join(__dirname,'produit.db') ;
const db = new sqlite3.Database(dbFileLocation, (err)=> {
    if(err) {
        return console.log(err.message);
    }
    console.log('connected');
});

const sql1 = "select * from produits";
db.all(sql1,[],(err,rows)=>{
    if(err) {
        return console.log(err.message);
    }

    rows.forEach((row)=>{
        console.log(row.Ref , row.Libelle);
    })
});
//
const sql2 = "select * from produits where Ref= ?";
db.get(sql2,['T103'], (err,row)=>{
    if(err) {
        return console.log(err.message);
    }
    console.log(row.Ref , row.Libelle , row.PU , row.Description);
  
});
//
const sql3 = "insert into produits(Ref,Libelle,PU,Description) values(?,?,?,?)"
const parm = ['T120','tableau',150,'tableau'];
db.run(sql3,parm,(err)=>{
    if(err) {
        return console.log(err);
    }
    console.log('OK');
});