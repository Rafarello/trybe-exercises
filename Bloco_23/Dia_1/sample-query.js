const connection = require('./connection');

const testRequest = async () => {
  const promise = await connection.execute('SELECT * FROM characters');
  const [data] = promise;
  console.log(data);
  connection.end();
};

testRequest();
