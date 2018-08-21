const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "sql20.main-hosting.eu",
  user: "u499541284_bv",
  password: "Lore*1982",
  database: "u499541284_bv"
});

connection.connect(function(err) {
  if(err) {
    console.log(err);
    return
  } else {
    console.log("Db is connected!");
  }
});
 
module.exports = connection;