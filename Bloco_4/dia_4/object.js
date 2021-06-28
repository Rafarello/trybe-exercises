let person = {
    name: 'Rafael',
    lastName: 'Moraes',
    canDrive: true,
    age: 27,
    favoriteMovies: ['Interestelar', 'Lista de Schindler', 'Batman'],
    favoriteNumbers: [5,13],
    address: {
        street: 'Rua Manoel Penellas',
        number: '529',
        city: 'Guarujá'
    }
}
// Notação de ponto (dot notation):

console.log(person.name);

// Notação de colchetes (bracket notation):

console.log(person['age']);

// Acessando objetos dentro de objetos através da notação de colchetes:

console.log(person['address']['city']);