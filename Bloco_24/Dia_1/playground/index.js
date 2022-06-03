const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("books", {
    host: "localhost",
    port: "3306",
    username:"root",
    password: "1234",
    database: "playground",
    dialect: "mysql",
});

const Book = sequelize.define({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    year: DataTypes.INTEGER,
});

const main = async() => {
    await Book.sync(); // Cria a tabela desse modelo
    const books = await Book.findAll();
    console.log(books);
    sequelize.close();
}
main();