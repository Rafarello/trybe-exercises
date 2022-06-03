const connection = require('./connection');

module.exports = {
  getAll: async () => {
    const query = await connection.execute('SELECT * FROM characters');
    const [data] = query;
    return data;
  },
  insert: async (name, cartoon) => {
    const query = `
      INSERT INTO characters (name, cartoon)
      VALUES (?, ?)`;
    const [data] = await connection.execute(query, [name, cartoon]);
    return data.insertId;
  },
  delete: async (id) => {
    const query = `
      DELETE FROM characters 
      WHERE id = ?`;
    const [data] = await connection.execute(query, [id]);
    return data;
  },
};
