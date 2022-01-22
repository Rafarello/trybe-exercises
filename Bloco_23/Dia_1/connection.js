const mysql = require("mysql2/promise");

// createpool é um gerenciador de conexões

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "live_lecture_23_1",
  port: 3306,
});

const testRequest = async () => {
  const promise = await connection.execute("SELECT * FROM characters")
  const [data, metaData] = promise;
  console.log(data);
}    

testRequest();

module.exports = connection;